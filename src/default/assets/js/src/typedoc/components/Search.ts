/// <reference types='lunr' />

declare namespace typedoc.search
{
    interface IDocument {
        id:number;
        kind:number;
        name:string;
        url:string;
        classes:string;
        parent?:string;
    }

    interface IData {
        kinds:{[kind:number]:string};
        rows:IDocument[];
    }

    var data:IData;
}


namespace typedoc.search
{
    /**
     * Loading state definitions.
     */
    enum SearchLoadingState
    {
        Idle, Loading, Ready, Failure
    }

    /**
     * Provides an indexed search on generated documentation
     */
    export class Search extends Backbone.View<any> {
        /**
         * The input field of the search widget.
         */
        private $field: JQuery = $('#tsd-search-field');

        /**
         * The result list wrapper.
         */
        private $results: JQuery = $('.results');

        /**
         * The base url that must be prepended to the indexed urls.
         */
        private base: string = this.$el.attr('data-base') + '/';

        /**
         * The current query string.
         */
        private query: string = '';

        /**
         * The state the search is currently in.
         */
        private loadingState: SearchLoadingState = SearchLoadingState.Idle;

        /**
         * Is the input field focused?
         */
        private hasFocus: boolean = false;

        /**
         * Should the next key press be prevents?
         */
        private preventPress: boolean = false;

        /**
         * The lunr index used to search the documentation.
         */
        private index: lunr.Index | null = null;

        /**
         * Has a search result been clicked?
         * Used to stop the results hiding before a user can fully click on a result.
         */
        private resultClicked: boolean = false;

        constructor(options: Backbone.ViewOptions<any>) {
            super(options);

            this.bindEvents();
        }

        /**
         * Instantiate the lunr index.
         */
        private createIndex() {
            var builder = new lunr.Builder();
            builder.pipeline.add(
                lunr.trimmer
            );

            builder.field('name', {boost: 10});
            builder.field('parent');
            builder.ref('id');

            var rows = data.rows;
            var pos = 0;
            var length = rows.length;

            const batch = () => {
                var cycles = 0;
                while (cycles++ < 100) {
                    builder.add(rows[pos]);
                    if (++pos == length) {
                        this.index = builder.build();
                        return this.setLoadingState(SearchLoadingState.Ready);
                    }
                }
                setTimeout(batch, 10);
            };

            batch();
        }


        /**
         * Lazy load the search index and parse it.
         */
        private loadIndex() {
            if (this.loadingState != SearchLoadingState.Idle) return;
            setTimeout(() => {
                if (this.loadingState == SearchLoadingState.Idle) {
                    this.setLoadingState(SearchLoadingState.Loading);
                }
            }, 500);

            if (typeof data != 'undefined') {
                this.createIndex();
            } else {
                $.get(this.$el.attr('data-index'))
                    .done((source: string) => {
                        eval(source);
                        this.createIndex();
                    }).fail(() => {
                    this.setLoadingState(SearchLoadingState.Failure);
                });
            }
        }


        /**
         * Update the visible state of the search control.
         */
        private updateResults() {
            this.$results.empty();
            if (this.loadingState != SearchLoadingState.Ready || !this.query || !this.index) return;

            // Perform a wildcard search
            var res = this.index.search(`*${this.query}*`);

            // If still no results, try a fuzzy match search
            if (res.length === 0) {
                res = this.index.search(`*${this.query}~1*`);
            }

            for (var i = 0, c = Math.min(10, res.length); i < c; i++) {
                var row = data.rows[Number(res[i].ref)];

                // Bold the matched part of the query in the search results
                var name = row.name.replace(new RegExp(this.query, 'i'), (match: string) => `<b>${match}</b>`);
                var parent = row.parent || '';
                parent = parent.replace(new RegExp(this.query, 'i'), (match: string) => `<b>${match}</b>`);

                if (parent) name = '<span class="parent">' + parent + '.</span>' + name;
                this.$results.append('<li class="' + row.classes + '"><a href="' + this.base + row.url + '" class="tsd-kind-icon">' + name + '</li>');
            }
        }


        /**
         * Set the loading state and update the visual state accordingly.
         */
        private setLoadingState(value: SearchLoadingState) {
            if (this.loadingState == value) return;

            this.$el.removeClass(SearchLoadingState[this.loadingState].toLowerCase());
            this.loadingState = value;
            this.$el.addClass(SearchLoadingState[this.loadingState].toLowerCase());

            if (value == SearchLoadingState.Ready) {
                this.updateResults();
            }
        }


        /**
         * Set the focus state and update the visual state accordingly.
         */
        private setHasFocus(value: boolean) {
            if (this.hasFocus == value) return;
            this.hasFocus = value;
            this.$el.toggleClass('has-focus');

            if (!value) {
                this.$field.val(this.query);
            } else {
                this.setQuery('');
                this.$field.val('');
            }
        }


        /**
         * Set the query string and update the results.
         */
        private setQuery(value: string) {
            this.query = $.trim(value);
            this.updateResults();
        }


        /**
         * Move the highlight within the result set.
         */
        private setCurrentResult(dir: number) {
            var $current = this.$results.find('.current');
            if ($current.length == 0) {
                this.$results.find(dir == 1 ? 'li:first-child' : 'li:last-child').addClass('current');
            } else {
                var $rel = dir == 1 ? $current.next('li') : $current.prev('li');
                if ($rel.length > 0) {
                    $current.removeClass('current');
                    $rel.addClass('current');
                }
            }
        }


        /**
         * Navigate to the highlighted result.
         */
        private gotoCurrentResult() {
            var $current = this.$results.find('.current');

            if ($current.length == 0) {
                $current = this.$results.find('li:first-child');
            }

            if ($current.length > 0) {
                window.location.href = $current.find('a').prop('href');
                this.$field.blur();
            }
        }

        /**
         * Bind events on result list wrapper, input field and document body.
         */
        private bindEvents() {
            /**
             * Intercept mousedown and mouseup events so we can correctly
             * handle clicking on search results.
             */
            this.$results
                .on('mousedown', () => {
                    this.resultClicked = true;
                })
                .on('mouseup', () => {
                    this.resultClicked = false;
                    this.setHasFocus(false);
                });


            /**
             * Bind all required events on the input field.
             */
            this.$field.on('focusin', () => {
                this.setHasFocus(true);
                this.loadIndex();
            }).on('focusout', () => {
                // If the user just clicked on a search result, then
                // don't lose the focus straight away, as this prevents
                // them from clicking the result and following the link
                if (this.resultClicked) {
                    this.resultClicked = false;
                    return;
                }

                setTimeout(() => this.setHasFocus(false), 100);
            }).on('input', () => {
                this.setQuery($.trim((this.$field.val() || '').toString()));
            }).on('keydown', (e: JQueryKeyEventObject) => {
                if (e.keyCode == 13 || e.keyCode == 27 || e.keyCode == 38 || e.keyCode == 40) {
                    this.preventPress = true;
                    e.preventDefault();

                    if (e.keyCode == 13) {
                        this.gotoCurrentResult();
                    } else if (e.keyCode == 27) {
                        this.$field.blur();
                    } else if (e.keyCode == 38) {
                        this.setCurrentResult(-1);
                    } else if (e.keyCode == 40) {
                        this.setCurrentResult(1);
                    }
                } else {
                    this.preventPress = false;
                }
            }).on('keypress', (e) => {
                if (this.preventPress) e.preventDefault();
            });


            /**
             * Start searching by pressing a key on the body.
             */
            $('body').on('keydown', (e: JQueryKeyEventObject) => {
                if (e.altKey || e.ctrlKey || e.metaKey) return;
                if (!this.hasFocus && e.keyCode > 47 && e.keyCode < 112) {
                    this.$field.focus();
                }
            });
        }
    }

    /**
     * Register this component.
     */
    registerComponent(Search, '#tsd-search');
}

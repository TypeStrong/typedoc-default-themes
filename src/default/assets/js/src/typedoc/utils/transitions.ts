namespace typedoc {
    function getVendorInfo(tuples: {[key: string]: string}) {
        for (var name in tuples) {
            if (!tuples.hasOwnProperty(name))
                continue;
            if (typeof ((document.body.style as any)[name]) !== 'undefined') {
                return { name: name, endEvent: tuples[name] };
            }
        }
        return null;
    }


    export var transition = getVendorInfo({
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'msTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    });


    export function noTransition(el: HTMLElement, callback: () => void) {
        el.classList.add('no-transition');
        callback();
        el.getBoundingClientRect();
        el.classList.remove('no-transition');
    }


    export function animateHeight(el: HTMLElement, callback:Function, success?:Function) {
        let from = parseFloat(getComputedStyle(el).height) || 0;
        let to = from;
        noTransition(el, () => {
            callback();

            el.style.height = '';
            to = parseFloat(getComputedStyle(el).height) || 0;
            if (from != to && transition) {
                el.style.height = from + 'px';
            }
        });

        if (from != to && transition) {
            el.style.height = to + 'px';
            const onTransitionEnd = () => {
                noTransition(el, () => {
                    el.style.height = '';
                    if (success) success();
                });
            };

            el.addEventListener(transition.endEvent, onTransitionEnd, { once: true });
        } else {
            if (success) success();
        }
    }
}

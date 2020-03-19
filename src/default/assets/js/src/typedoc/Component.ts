namespace typedoc
{
    interface IComponentOptions {
        el: HTMLElement;
    }

    /**
     * TypeDoc component class.
     */
    export class Component {
        private el: HTMLElement;

        constructor(options: IComponentOptions) {
            this.el = options.el;
        }
    }
}

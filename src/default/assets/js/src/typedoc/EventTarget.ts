namespace typedoc
{
    /**
     * TypeDoc event target class.
     */
    export class EventTarget {
        private listeners: Record<string, EventListener[]> = {};

        public addEventListener(type: string, callback: EventListener) {
            if (!(type in this.listeners)) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        };

        public removeEventListener(type: string, callback: EventListener) {
            if (!(type in this.listeners)) {
                return;
            }
            const stack = this.listeners[type];
            for (let i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback){
                    stack.splice(i, 1);
                    return;
                }
            }
        };

        public dispatchEvent(event: Event) {
            if (!(event.type in this.listeners)) {
                return true;
            }
            const stack = this.listeners[event.type].slice();

            for (let i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
            return !event.defaultPrevented;
        };
    }
}

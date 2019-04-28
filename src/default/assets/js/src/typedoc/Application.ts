import * as Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';

export var $html = $('html');

export type NewableFunction = new (...args: any[]) => any;

/**
 * Service definition.
 */
export interface IService<T extends NewableFunction = any>
{
    constructor: T;
    name: string;
    instance: InstanceType<T>;
    priority: number;
}


/**
 * Component definition.
 */
export interface IComponent
{
    constructor:any;
    selector:string;
    priority:number;
    namespace:string;
}


/**
 * List of all known services.
 */
var services: IService[] = [];

/**
 * List of all known components.
 */
var components:IComponent[] = [];

/**
 * jQuery instance of the document.
 */
export var $document = $(document);

/**
 * jQuery instance of the window.
 */
export var $window = $(window);

/**
 * jQuery instance of the window.
 */
export var $body = $('body');


/**
 * Register a new component.
 */
export function registerService(constructor:any, name:string, priority:number = 0) {
    services.push({
        constructor: constructor,
        name:        name,
        priority:    priority,
        instance:    null
    });

    services.sort((a:IService, b:IService) => a.priority - b.priority);
}


/**
 * Register a new component.
 */
export function registerComponent(constructor:any, selector:string, priority:number = 0, namespace:string = '*')
{
    components.push({
        selector:    selector,
        constructor: constructor,
        priority:    priority,
        namespace:   namespace
    });

    components.sort((a:IComponent, b:IComponent) => a.priority - b.priority);
}


/**
 * Copy of Backbone.Events to TypeScript class.
 */
export const Events = function () {} as any as Backbone.Events & { new (): Backbone.Events };
_.extend(Events.prototype, Backbone.Events);


/**
 * TypeDoc application class.
 */
export class Application extends Events
{
    /**
     * Create a new Application instance.
     */
    constructor() {
        super();

        this.createServices();
        this.createComponents($body);
    }


    /**
     * Create all services.
     */
    private createServices() {
        _.forEach(services, (c) => {
            c.instance = new c.constructor();
        });
    }

    private getService<T extends NewableFunction>(ctor: T): InstanceType<T> {
        const service = _.find(services, (service) => service.constructor === ctor);
        if (!service) {
            throw new Error(`Service ${ctor} not found`);
        }
        return service.instance;
    }


    /**
     * Create all components beneath the given jQuery element.
     */
    public createComponents($context:JQuery, namespace:string = 'default'):Backbone.View<any>[] {
        var result: any[] = [];
        _.forEach(components, (c) => {
            if (c.namespace != namespace && c.namespace != '*') {
                return;
            }

            $context.find(c.selector).each((m:number, el: Element) => {
                var $el = $(el), instance;
                if (instance = $el.data('component')) {
                    if (_.contains(result, instance)) {
                        result.push(instance);
                    }
                } else {
                    instance = new c.constructor({el:el}, this.getService);
                    $el.data('component', instance);
                    result.push(instance);
                }
            });
        });

        return result;
    }
}

export type getServiceFunction<T extends NewableFunction = any> = InstanceType<T>;

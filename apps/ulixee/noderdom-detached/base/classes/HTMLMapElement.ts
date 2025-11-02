import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLMapElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMapElement } = StateMachine<
  IHTMLMapElement,
  IHTMLMapElementProperties,
  IHTMLMapElementReadonlyProperties
>('HTMLMapElement');
export const internalHandler = new InternalHandler<IHTMLMapElement>('HTMLMapElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMapElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMapElement extends HTMLElement implements IHTMLMapElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMapElement>(HTMLMapElement, this, internalHandler, HTMLMapElementConstantKeys, HTMLMapElementPropertyKeys);
    }

    // properties

    public get areas(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'areas', false);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMapElementProperties extends IHTMLElementProperties {
  areas?: IHTMLCollection;
  name?: string;
}

export interface IHTMLMapElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  areas?: IHTMLCollection;
}

// tslint:disable-next-line:variable-name
export const HTMLMapElementPropertyKeys = [...HTMLElementPropertyKeys, 'areas', 'name'];

// tslint:disable-next-line:variable-name
export const HTMLMapElementConstantKeys = [...HTMLElementConstantKeys];

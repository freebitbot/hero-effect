import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLDataListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDataListElement } = StateMachine<
  IHTMLDataListElement,
  IHTMLDataListElementProperties,
  IHTMLDataListElementReadonlyProperties
>('HTMLDataListElement');
export const internalHandler = new InternalHandler<IHTMLDataListElement>('HTMLDataListElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDataListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDataListElement extends HTMLElement implements IHTMLDataListElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDataListElement>(HTMLDataListElement, this, internalHandler, HTMLDataListElementConstantKeys, HTMLDataListElementPropertyKeys);
    }

    // properties

    public get options(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'options', false);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDataListElementProperties extends IHTMLElementProperties {
  options?: IHTMLCollection;
}

export interface IHTMLDataListElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  options?: IHTMLCollection;
}

// tslint:disable-next-line:variable-name
export const HTMLDataListElementPropertyKeys = [...HTMLElementPropertyKeys, 'options'];

// tslint:disable-next-line:variable-name
export const HTMLDataListElementConstantKeys = [...HTMLElementConstantKeys];

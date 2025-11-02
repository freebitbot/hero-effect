import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLQuoteElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLQuoteElement } = StateMachine<
  IHTMLQuoteElement,
  IHTMLQuoteElementProperties,
  IHTMLQuoteElementReadonlyProperties
>('HTMLQuoteElement');
export const internalHandler = new InternalHandler<IHTMLQuoteElement>('HTMLQuoteElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLQuoteElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLQuoteElement extends HTMLElement implements IHTMLQuoteElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLQuoteElement>(HTMLQuoteElement, this, internalHandler, HTMLQuoteElementConstantKeys, HTMLQuoteElementPropertyKeys);
    }

    // properties

    public get cite(): string {
      return internalHandler.get<string>(this, 'cite', false);
    }

    public set cite(value: string) {
      internalHandler.set<string>(this, 'cite', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLQuoteElementProperties extends IHTMLElementProperties {
  cite?: string;
}

export interface IHTMLQuoteElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLQuoteElementPropertyKeys = [...HTMLElementPropertyKeys, 'cite'];

// tslint:disable-next-line:variable-name
export const HTMLQuoteElementConstantKeys = [...HTMLElementConstantKeys];

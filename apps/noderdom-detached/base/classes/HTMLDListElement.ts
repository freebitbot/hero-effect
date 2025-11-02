import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDListElement } = StateMachine<
  IHTMLDListElement,
  IHTMLDListElementProperties,
  IHTMLDListElementReadonlyProperties
>('HTMLDListElement');
export const internalHandler = new InternalHandler<IHTMLDListElement>('HTMLDListElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDListElement extends HTMLElement implements IHTMLDListElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDListElement>(HTMLDListElement, this, internalHandler, HTMLDListElementConstantKeys, HTMLDListElementPropertyKeys);
    }

    // properties

    public get compact(): boolean {
      return internalHandler.get<boolean>(this, 'compact', false);
    }

    public set compact(value: boolean) {
      internalHandler.set<boolean>(this, 'compact', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDListElementProperties extends IHTMLElementProperties {
  compact?: boolean;
}

export interface IHTMLDListElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact'];

// tslint:disable-next-line:variable-name
export const HTMLDListElementConstantKeys = [...HTMLElementConstantKeys];

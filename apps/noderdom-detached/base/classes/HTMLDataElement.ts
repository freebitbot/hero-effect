import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDataElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDataElement } = StateMachine<
  IHTMLDataElement,
  IHTMLDataElementProperties,
  IHTMLDataElementReadonlyProperties
>('HTMLDataElement');
export const internalHandler = new InternalHandler<IHTMLDataElement>('HTMLDataElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDataElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDataElement extends HTMLElement implements IHTMLDataElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDataElement>(HTMLDataElement, this, internalHandler, HTMLDataElementConstantKeys, HTMLDataElementPropertyKeys);
    }

    // properties

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDataElementProperties extends IHTMLElementProperties {
  value?: string;
}

export interface IHTMLDataElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDataElementPropertyKeys = [...HTMLElementPropertyKeys, 'value'];

// tslint:disable-next-line:variable-name
export const HTMLDataElementConstantKeys = [...HTMLElementConstantKeys];

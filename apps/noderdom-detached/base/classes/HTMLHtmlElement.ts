import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHtmlElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHtmlElement } = StateMachine<
  IHTMLHtmlElement,
  IHTMLHtmlElementProperties,
  IHTMLHtmlElementReadonlyProperties
>('HTMLHtmlElement');
export const internalHandler = new InternalHandler<IHTMLHtmlElement>('HTMLHtmlElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLHtmlElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHtmlElement extends HTMLElement implements IHTMLHtmlElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLHtmlElement>(HTMLHtmlElement, this, internalHandler, HTMLHtmlElementConstantKeys, HTMLHtmlElementPropertyKeys);
    }

    // properties

    public get version(): string {
      return internalHandler.get<string>(this, 'version', false);
    }

    public set version(value: string) {
      internalHandler.set<string>(this, 'version', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLHtmlElementProperties extends IHTMLElementProperties {
  version?: string;
}

export interface IHTMLHtmlElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLHtmlElementPropertyKeys = [...HTMLElementPropertyKeys, 'version'];

// tslint:disable-next-line:variable-name
export const HTMLHtmlElementConstantKeys = [...HTMLElementConstantKeys];

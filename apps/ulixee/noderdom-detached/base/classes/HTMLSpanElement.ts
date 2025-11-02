import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLSpanElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLSpanElement } = StateMachine<
  IHTMLSpanElement,
  IHTMLSpanElementProperties,
  IHTMLSpanElementReadonlyProperties
>('HTMLSpanElement');
export const internalHandler = new InternalHandler<IHTMLSpanElement>('HTMLSpanElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLSpanElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSpanElement extends HTMLElement implements IHTMLSpanElement {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLSpanElement>(HTMLSpanElement, this, internalHandler, HTMLSpanElementConstantKeys, HTMLSpanElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSpanElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSpanElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLSpanElementProperties extends IHTMLElementProperties {}

export interface IHTMLSpanElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLSpanElementPropertyKeys = [...HTMLElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLSpanElementConstantKeys = [...HTMLElementConstantKeys];

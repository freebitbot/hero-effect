import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHeadElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHeadElement } = StateMachine<
  IHTMLHeadElement,
  IHTMLHeadElementProperties,
  IHTMLHeadElementReadonlyProperties
>('HTMLHeadElement');
export const internalHandler = new InternalHandler<IHTMLHeadElement>('HTMLHeadElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLHeadElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadElement extends HTMLElement implements IHTMLHeadElement {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLHeadElement>(HTMLHeadElement, this, internalHandler, HTMLHeadElementConstantKeys, HTMLHeadElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLHeadElementProperties extends IHTMLElementProperties {}

export interface IHTMLHeadElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLHeadElementPropertyKeys = [...HTMLElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLHeadElementConstantKeys = [...HTMLElementConstantKeys];

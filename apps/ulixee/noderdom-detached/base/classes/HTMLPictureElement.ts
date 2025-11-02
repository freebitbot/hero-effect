import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLPictureElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLPictureElement } = StateMachine<
  IHTMLPictureElement,
  IHTMLPictureElementProperties,
  IHTMLPictureElementReadonlyProperties
>('HTMLPictureElement');
export const internalHandler = new InternalHandler<IHTMLPictureElement>('HTMLPictureElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLPictureElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLPictureElement extends HTMLElement implements IHTMLPictureElement {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLPictureElement>(HTMLPictureElement, this, internalHandler, HTMLPictureElementConstantKeys, HTMLPictureElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPictureElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPictureElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLPictureElementProperties extends IHTMLElementProperties {}

export interface IHTMLPictureElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLPictureElementPropertyKeys = [...HTMLElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLPictureElementConstantKeys = [...HTMLElementConstantKeys];

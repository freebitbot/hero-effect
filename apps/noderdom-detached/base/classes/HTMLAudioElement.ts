import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLMediaElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLAudioElement } from '../interfaces';
import { IHTMLMediaElementProperties, IHTMLMediaElementReadonlyProperties, HTMLMediaElementPropertyKeys, HTMLMediaElementConstantKeys } from './HTMLMediaElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLAudioElement } = StateMachine<
  IHTMLAudioElement,
  IHTMLAudioElementProperties,
  IHTMLAudioElementReadonlyProperties
>('HTMLAudioElement');
export const internalHandler = new InternalHandler<IHTMLAudioElement>('HTMLAudioElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLAudioElementGenerator(HTMLMediaElement: Constructable<IHTMLMediaElement>) {
  return class HTMLAudioElement extends HTMLMediaElement implements IHTMLAudioElement {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLAudioElement>(HTMLAudioElement, this, internalHandler, HTMLAudioElementConstantKeys, HTMLAudioElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLAudioElementProperties extends IHTMLMediaElementProperties {}

export interface IHTMLAudioElementReadonlyProperties extends IHTMLMediaElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLAudioElementPropertyKeys = [...HTMLMediaElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLAudioElementConstantKeys = [...HTMLMediaElementConstantKeys];

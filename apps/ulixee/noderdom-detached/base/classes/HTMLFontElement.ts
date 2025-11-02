import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFontElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFontElement } = StateMachine<
  IHTMLFontElement,
  IHTMLFontElementProperties,
  IHTMLFontElementReadonlyProperties
>('HTMLFontElement');
export const internalHandler = new InternalHandler<IHTMLFontElement>('HTMLFontElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFontElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFontElement extends HTMLElement implements IHTMLFontElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFontElement>(HTMLFontElement, this, internalHandler, HTMLFontElementConstantKeys, HTMLFontElementPropertyKeys);
    }

    // properties

    public get color(): string {
      return internalHandler.get<string>(this, 'color', false);
    }

    public set color(value: string) {
      internalHandler.set<string>(this, 'color', value);
    }

    public get face(): string {
      return internalHandler.get<string>(this, 'face', false);
    }

    public set face(value: string) {
      internalHandler.set<string>(this, 'face', value);
    }

    public get size(): string {
      return internalHandler.get<string>(this, 'size', false);
    }

    public set size(value: string) {
      internalHandler.set<string>(this, 'size', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFontElementProperties extends IHTMLElementProperties {
  color?: string;
  face?: string;
  size?: string;
}

export interface IHTMLFontElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLFontElementPropertyKeys = [...HTMLElementPropertyKeys, 'color', 'face', 'size'];

// tslint:disable-next-line:variable-name
export const HTMLFontElementConstantKeys = [...HTMLElementConstantKeys];

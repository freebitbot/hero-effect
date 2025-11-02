import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLScriptElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLScriptElement } = StateMachine<
  IHTMLScriptElement,
  IHTMLScriptElementProperties,
  IHTMLScriptElementReadonlyProperties
>('HTMLScriptElement');
export const internalHandler = new InternalHandler<IHTMLScriptElement>('HTMLScriptElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLScriptElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLScriptElement extends HTMLElement implements IHTMLScriptElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLScriptElement>(HTMLScriptElement, this, internalHandler, HTMLScriptElementConstantKeys, HTMLScriptElementPropertyKeys);
    }

    // properties

    public get charset(): string {
      return internalHandler.get<string>(this, 'charset', false);
    }

    public set charset(value: string) {
      internalHandler.set<string>(this, 'charset', value);
    }

    public get crossOrigin(): string | null {
      return internalHandler.get<string | null>(this, 'crossOrigin', true);
    }

    public set crossOrigin(value: string | null) {
      internalHandler.set<string | null>(this, 'crossOrigin', value);
    }

    public get defer(): boolean {
      return internalHandler.get<boolean>(this, 'defer', false);
    }

    public set defer(value: boolean) {
      internalHandler.set<boolean>(this, 'defer', value);
    }

    public get event(): string {
      return internalHandler.get<string>(this, 'event', false);
    }

    public set event(value: string) {
      internalHandler.set<string>(this, 'event', value);
    }

    public get htmlFor(): string {
      return internalHandler.get<string>(this, 'htmlFor', false);
    }

    public set htmlFor(value: string) {
      internalHandler.set<string>(this, 'htmlFor', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get text(): string {
      return internalHandler.get<string>(this, 'text', false);
    }

    public set text(value: string) {
      internalHandler.set<string>(this, 'text', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLScriptElementProperties extends IHTMLElementProperties {
  charset?: string;
  crossOrigin?: string | null;
  defer?: boolean;
  event?: string;
  htmlFor?: string;
  src?: string;
  text?: string;
  type?: string;
}

export interface IHTMLScriptElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLScriptElementPropertyKeys = [...HTMLElementPropertyKeys, 'charset', 'crossOrigin', 'defer', 'event', 'htmlFor', 'src', 'text', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLScriptElementConstantKeys = [...HTMLElementConstantKeys];

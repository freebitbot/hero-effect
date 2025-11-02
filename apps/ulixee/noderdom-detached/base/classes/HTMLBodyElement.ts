import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IWindowEventHandlers, IHTMLBodyElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBodyElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties, WindowEventHandlersPropertyKeys, WindowEventHandlersConstantKeys } from '../mixins/WindowEventHandlers';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLBodyElement } = StateMachine<
  IHTMLBodyElement,
  IHTMLBodyElementProperties,
  IHTMLBodyElementReadonlyProperties
>('HTMLBodyElement');
export const internalHandler = new InternalHandler<IHTMLBodyElement>('HTMLBodyElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLBodyElementGenerator(HTMLElement: Constructable<IHTMLElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [WindowEventHandlers]) as unknown) as Constructable<IHTMLElement & IWindowEventHandlers>;

  return class HTMLBodyElement extends Parent implements IHTMLBodyElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLBodyElement>(HTMLBodyElement, this, internalHandler, HTMLBodyElementConstantKeys, HTMLBodyElementPropertyKeys);
    }

    // properties

    public get aLink(): string {
      return internalHandler.get<string>(this, 'aLink', false);
    }

    public set aLink(value: string) {
      internalHandler.set<string>(this, 'aLink', value);
    }

    public get background(): string {
      return internalHandler.get<string>(this, 'background', false);
    }

    public set background(value: string) {
      internalHandler.set<string>(this, 'background', value);
    }

    public get bgColor(): string {
      return internalHandler.get<string>(this, 'bgColor', false);
    }

    public set bgColor(value: string) {
      internalHandler.set<string>(this, 'bgColor', value);
    }

    public get link(): string {
      return internalHandler.get<string>(this, 'link', false);
    }

    public set link(value: string) {
      internalHandler.set<string>(this, 'link', value);
    }

    public get text(): string {
      return internalHandler.get<string>(this, 'text', false);
    }

    public set text(value: string) {
      internalHandler.set<string>(this, 'text', value);
    }

    public get vLink(): string {
      return internalHandler.get<string>(this, 'vLink', false);
    }

    public set vLink(value: string) {
      internalHandler.set<string>(this, 'vLink', value);
    }

    public addEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLBodyElementProperties extends IHTMLElementProperties, IWindowEventHandlersProperties {
  aLink?: string;
  background?: string;
  bgColor?: string;
  link?: string;
  text?: string;
  vLink?: string;
}

export interface IHTMLBodyElementReadonlyProperties extends IHTMLElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLBodyElementPropertyKeys = [...HTMLElementPropertyKeys, ...WindowEventHandlersPropertyKeys, 'aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];

// tslint:disable-next-line:variable-name
export const HTMLBodyElementConstantKeys = [...HTMLElementConstantKeys, ...WindowEventHandlersConstantKeys];

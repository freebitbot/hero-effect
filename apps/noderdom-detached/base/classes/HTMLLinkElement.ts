import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, ILinkStyle, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLLinkElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { ILinkStyleProperties, ILinkStyleReadonlyProperties, LinkStylePropertyKeys, LinkStyleConstantKeys } from '../mixins/LinkStyle';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLLinkElement } = StateMachine<
  IHTMLLinkElement,
  IHTMLLinkElementProperties,
  IHTMLLinkElementReadonlyProperties
>('HTMLLinkElement');
export const internalHandler = new InternalHandler<IHTMLLinkElement>('HTMLLinkElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLLinkElementGenerator(HTMLElement: Constructable<IHTMLElement>, LinkStyle: Constructable<ILinkStyle>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [LinkStyle]) as unknown) as Constructable<IHTMLElement & ILinkStyle>;

  return class HTMLLinkElement extends Parent implements IHTMLLinkElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLLinkElement>(HTMLLinkElement, this, internalHandler, HTMLLinkElementConstantKeys, HTMLLinkElementPropertyKeys);
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

    public get href(): string {
      return internalHandler.get<string>(this, 'href', false);
    }

    public set href(value: string) {
      internalHandler.set<string>(this, 'href', value);
    }

    public get hreflang(): string {
      return internalHandler.get<string>(this, 'hreflang', false);
    }

    public set hreflang(value: string) {
      internalHandler.set<string>(this, 'hreflang', value);
    }

    public get media(): string {
      return internalHandler.get<string>(this, 'media', false);
    }

    public set media(value: string) {
      internalHandler.set<string>(this, 'media', value);
    }

    public get rel(): string {
      return internalHandler.get<string>(this, 'rel', false);
    }

    public set rel(value: string) {
      internalHandler.set<string>(this, 'rel', value);
    }

    public get relList(): IDOMTokenList {
      return internalHandler.get<IDOMTokenList>(this, 'relList', false);
    }

    public get rev(): string {
      return internalHandler.get<string>(this, 'rev', false);
    }

    public set rev(value: string) {
      internalHandler.set<string>(this, 'rev', value);
    }

    public get target(): string {
      return internalHandler.get<string>(this, 'target', false);
    }

    public set target(value: string) {
      internalHandler.set<string>(this, 'target', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLLinkElementProperties extends IHTMLElementProperties, ILinkStyleProperties {
  charset?: string;
  crossOrigin?: string | null;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  relList?: IDOMTokenList;
  rev?: string;
  target?: string;
  type?: string;
}

export interface IHTMLLinkElementReadonlyProperties extends IHTMLElementReadonlyProperties, ILinkStyleReadonlyProperties {
  relList?: IDOMTokenList;
}

// tslint:disable-next-line:variable-name
export const HTMLLinkElementPropertyKeys = [...HTMLElementPropertyKeys, ...LinkStylePropertyKeys, 'charset', 'crossOrigin', 'href', 'hreflang', 'media', 'rel', 'relList', 'rev', 'target', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLLinkElementConstantKeys = [...HTMLElementConstantKeys, ...LinkStyleConstantKeys];

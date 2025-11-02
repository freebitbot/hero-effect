import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, ILinkStyle, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLStyleElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { ILinkStyleProperties, ILinkStyleReadonlyProperties, LinkStylePropertyKeys, LinkStyleConstantKeys } from '../mixins/LinkStyle';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLStyleElement } = StateMachine<
  IHTMLStyleElement,
  IHTMLStyleElementProperties,
  IHTMLStyleElementReadonlyProperties
>('HTMLStyleElement');
export const internalHandler = new InternalHandler<IHTMLStyleElement>('HTMLStyleElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLStyleElementGenerator(HTMLElement: Constructable<IHTMLElement>, LinkStyle: Constructable<ILinkStyle>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [LinkStyle]) as unknown) as Constructable<IHTMLElement & ILinkStyle>;

  return class HTMLStyleElement extends Parent implements IHTMLStyleElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLStyleElement>(HTMLStyleElement, this, internalHandler, HTMLStyleElementConstantKeys, HTMLStyleElementPropertyKeys);
    }

    // properties

    public get media(): string {
      return internalHandler.get<string>(this, 'media', false);
    }

    public set media(value: string) {
      internalHandler.set<string>(this, 'media', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLStyleElementProperties extends IHTMLElementProperties, ILinkStyleProperties {
  media?: string;
  type?: string;
}

export interface IHTMLStyleElementReadonlyProperties extends IHTMLElementReadonlyProperties, ILinkStyleReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLStyleElementPropertyKeys = [...HTMLElementPropertyKeys, ...LinkStylePropertyKeys, 'media', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLStyleElementConstantKeys = [...HTMLElementConstantKeys, ...LinkStyleConstantKeys];

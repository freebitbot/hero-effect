import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLSourceElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLSourceElement } = StateMachine<
  IHTMLSourceElement,
  IHTMLSourceElementProperties,
  IHTMLSourceElementReadonlyProperties
>('HTMLSourceElement');
export const internalHandler = new InternalHandler<IHTMLSourceElement>('HTMLSourceElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLSourceElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSourceElement extends HTMLElement implements IHTMLSourceElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLSourceElement>(HTMLSourceElement, this, internalHandler, HTMLSourceElementConstantKeys, HTMLSourceElementPropertyKeys);
    }

    // properties

    public get media(): string {
      return internalHandler.get<string>(this, 'media', false);
    }

    public set media(value: string) {
      internalHandler.set<string>(this, 'media', value);
    }

    public get sizes(): string {
      return internalHandler.get<string>(this, 'sizes', false);
    }

    public set sizes(value: string) {
      internalHandler.set<string>(this, 'sizes', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get srcset(): string {
      return internalHandler.get<string>(this, 'srcset', false);
    }

    public set srcset(value: string) {
      internalHandler.set<string>(this, 'srcset', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLSourceElementProperties extends IHTMLElementProperties {
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

export interface IHTMLSourceElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLSourceElementPropertyKeys = [...HTMLElementPropertyKeys, 'media', 'sizes', 'src', 'srcset', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLSourceElementConstantKeys = [...HTMLElementConstantKeys];

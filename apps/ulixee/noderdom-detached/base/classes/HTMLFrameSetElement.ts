import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IWindowEventHandlers, IHTMLFrameSetElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFrameSetElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties, WindowEventHandlersPropertyKeys, WindowEventHandlersConstantKeys } from '../mixins/WindowEventHandlers';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFrameSetElement } = StateMachine<
  IHTMLFrameSetElement,
  IHTMLFrameSetElementProperties,
  IHTMLFrameSetElementReadonlyProperties
>('HTMLFrameSetElement');
export const internalHandler = new InternalHandler<IHTMLFrameSetElement>('HTMLFrameSetElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFrameSetElementGenerator(HTMLElement: Constructable<IHTMLElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [WindowEventHandlers]) as unknown) as Constructable<IHTMLElement & IWindowEventHandlers>;

  return class HTMLFrameSetElement extends Parent implements IHTMLFrameSetElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFrameSetElement>(HTMLFrameSetElement, this, internalHandler, HTMLFrameSetElementConstantKeys, HTMLFrameSetElementPropertyKeys);
    }

    // properties

    public get cols(): string {
      return internalHandler.get<string>(this, 'cols', false);
    }

    public set cols(value: string) {
      internalHandler.set<string>(this, 'cols', value);
    }

    public get rows(): string {
      return internalHandler.get<string>(this, 'rows', false);
    }

    public set rows(value: string) {
      internalHandler.set<string>(this, 'rows', value);
    }

    public addEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFrameSetElementProperties extends IHTMLElementProperties, IWindowEventHandlersProperties {
  cols?: string;
  rows?: string;
}

export interface IHTMLFrameSetElementReadonlyProperties extends IHTMLElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLFrameSetElementPropertyKeys = [...HTMLElementPropertyKeys, ...WindowEventHandlersPropertyKeys, 'cols', 'rows'];

// tslint:disable-next-line:variable-name
export const HTMLFrameSetElementConstantKeys = [...HTMLElementConstantKeys, ...WindowEventHandlersConstantKeys];

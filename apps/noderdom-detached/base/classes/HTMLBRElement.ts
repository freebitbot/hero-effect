import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBRElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLBRElement } = StateMachine<
  IHTMLBRElement,
  IHTMLBRElementProperties,
  IHTMLBRElementReadonlyProperties
>('HTMLBRElement');
export const internalHandler = new InternalHandler<IHTMLBRElement>('HTMLBRElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLBRElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBRElement extends HTMLElement implements IHTMLBRElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLBRElement>(HTMLBRElement, this, internalHandler, HTMLBRElementConstantKeys, HTMLBRElementPropertyKeys);
    }

    // properties

    public get clear(): string {
      return internalHandler.get<string>(this, 'clear', false);
    }

    public set clear(value: string) {
      internalHandler.set<string>(this, 'clear', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLBRElementProperties extends IHTMLElementProperties {
  clear?: string;
}

export interface IHTMLBRElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLBRElementPropertyKeys = [...HTMLElementPropertyKeys, 'clear'];

// tslint:disable-next-line:variable-name
export const HTMLBRElementConstantKeys = [...HTMLElementConstantKeys];

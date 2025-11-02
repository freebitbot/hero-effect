import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableColElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableColElement } = StateMachine<
  IHTMLTableColElement,
  IHTMLTableColElementProperties,
  IHTMLTableColElementReadonlyProperties
>('HTMLTableColElement');
export const internalHandler = new InternalHandler<IHTMLTableColElement>('HTMLTableColElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableColElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableColElement extends HTMLElement implements IHTMLTableColElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableColElement>(HTMLTableColElement, this, internalHandler, HTMLTableColElementConstantKeys, HTMLTableColElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get ch(): string {
      return internalHandler.get<string>(this, 'ch', false);
    }

    public set ch(value: string) {
      internalHandler.set<string>(this, 'ch', value);
    }

    public get chOff(): string {
      return internalHandler.get<string>(this, 'chOff', false);
    }

    public set chOff(value: string) {
      internalHandler.set<string>(this, 'chOff', value);
    }

    public get span(): number {
      return internalHandler.get<number>(this, 'span', false);
    }

    public set span(value: number) {
      internalHandler.set<number>(this, 'span', value);
    }

    public get vAlign(): string {
      return internalHandler.get<string>(this, 'vAlign', false);
    }

    public set vAlign(value: string) {
      internalHandler.set<string>(this, 'vAlign', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableColElementProperties extends IHTMLElementProperties {
  align?: string;
  ch?: string;
  chOff?: string;
  span?: number;
  vAlign?: string;
  width?: string;
}

export interface IHTMLTableColElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLTableColElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'ch', 'chOff', 'span', 'vAlign', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLTableColElementConstantKeys = [...HTMLElementConstantKeys];

import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLTableSectionElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableSectionElement } = StateMachine<
  IHTMLTableSectionElement,
  IHTMLTableSectionElementProperties,
  IHTMLTableSectionElementReadonlyProperties
>('HTMLTableSectionElement');
export const internalHandler = new InternalHandler<IHTMLTableSectionElement>('HTMLTableSectionElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableSectionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableSectionElement extends HTMLElement implements IHTMLTableSectionElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableSectionElement>(HTMLTableSectionElement, this, internalHandler, HTMLTableSectionElementConstantKeys, HTMLTableSectionElementPropertyKeys);
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

    public get rows(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'rows', false);
    }

    public get vAlign(): string {
      return internalHandler.get<string>(this, 'vAlign', false);
    }

    public set vAlign(value: string) {
      internalHandler.set<string>(this, 'vAlign', value);
    }

    // methods

    public deleteRow(index: number): void {
      internalHandler.run<void>(this, 'deleteRow', [index]);
    }

    public insertRow(index?: number): IHTMLElement {
      return internalHandler.run<IHTMLElement>(this, 'insertRow', [index]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableSectionElementProperties extends IHTMLElementProperties {
  align?: string;
  ch?: string;
  chOff?: string;
  rows?: IHTMLCollection;
  vAlign?: string;
}

export interface IHTMLTableSectionElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  rows?: IHTMLCollection;
}

// tslint:disable-next-line:variable-name
export const HTMLTableSectionElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'ch', 'chOff', 'rows', 'vAlign'];

// tslint:disable-next-line:variable-name
export const HTMLTableSectionElementConstantKeys = [...HTMLElementConstantKeys];

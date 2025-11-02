import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCellElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableCellElement } = StateMachine<
  IHTMLTableCellElement,
  IHTMLTableCellElementProperties,
  IHTMLTableCellElementReadonlyProperties
>('HTMLTableCellElement');
export const internalHandler = new InternalHandler<IHTMLTableCellElement>('HTMLTableCellElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableCellElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCellElement extends HTMLElement implements IHTMLTableCellElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableCellElement>(HTMLTableCellElement, this, internalHandler, HTMLTableCellElementConstantKeys, HTMLTableCellElementPropertyKeys);
    }

    // properties

    public get abbr(): string {
      return internalHandler.get<string>(this, 'abbr', false);
    }

    public set abbr(value: string) {
      internalHandler.set<string>(this, 'abbr', value);
    }

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get axis(): string {
      return internalHandler.get<string>(this, 'axis', false);
    }

    public set axis(value: string) {
      internalHandler.set<string>(this, 'axis', value);
    }

    public get bgColor(): string {
      return internalHandler.get<string>(this, 'bgColor', false);
    }

    public set bgColor(value: string) {
      internalHandler.set<string>(this, 'bgColor', value);
    }

    public get cellIndex(): number {
      return internalHandler.get<number>(this, 'cellIndex', false);
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

    public get colSpan(): number {
      return internalHandler.get<number>(this, 'colSpan', false);
    }

    public set colSpan(value: number) {
      internalHandler.set<number>(this, 'colSpan', value);
    }

    public get headers(): string {
      return internalHandler.get<string>(this, 'headers', false);
    }

    public set headers(value: string) {
      internalHandler.set<string>(this, 'headers', value);
    }

    public get height(): string {
      return internalHandler.get<string>(this, 'height', false);
    }

    public set height(value: string) {
      internalHandler.set<string>(this, 'height', value);
    }

    public get noWrap(): boolean {
      return internalHandler.get<boolean>(this, 'noWrap', false);
    }

    public set noWrap(value: boolean) {
      internalHandler.set<boolean>(this, 'noWrap', value);
    }

    public get rowSpan(): number {
      return internalHandler.get<number>(this, 'rowSpan', false);
    }

    public set rowSpan(value: number) {
      internalHandler.set<number>(this, 'rowSpan', value);
    }

    public get scope(): string {
      return internalHandler.get<string>(this, 'scope', false);
    }

    public set scope(value: string) {
      internalHandler.set<string>(this, 'scope', value);
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableCellElementProperties extends IHTMLElementProperties {
  abbr?: string;
  align?: string;
  axis?: string;
  bgColor?: string;
  cellIndex?: number;
  ch?: string;
  chOff?: string;
  colSpan?: number;
  headers?: string;
  height?: string;
  noWrap?: boolean;
  rowSpan?: number;
  scope?: string;
  vAlign?: string;
  width?: string;
}

export interface IHTMLTableCellElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  cellIndex?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLTableCellElementPropertyKeys = [...HTMLElementPropertyKeys, 'abbr', 'align', 'axis', 'bgColor', 'cellIndex', 'ch', 'chOff', 'colSpan', 'headers', 'height', 'noWrap', 'rowSpan', 'scope', 'vAlign', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLTableCellElementConstantKeys = [...HTMLElementConstantKeys];

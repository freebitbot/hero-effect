import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCaptionElement, IHTMLTableSectionElement, IHTMLCollection, IHTMLTableRowElement, IHTMLTableElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableElement } = StateMachine<
  IHTMLTableElement,
  IHTMLTableElementProperties,
  IHTMLTableElementReadonlyProperties
>('HTMLTableElement');
export const internalHandler = new InternalHandler<IHTMLTableElement>('HTMLTableElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableElement extends HTMLElement implements IHTMLTableElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableElement>(HTMLTableElement, this, internalHandler, HTMLTableElementConstantKeys, HTMLTableElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get bgColor(): string {
      return internalHandler.get<string>(this, 'bgColor', false);
    }

    public set bgColor(value: string) {
      internalHandler.set<string>(this, 'bgColor', value);
    }

    public get border(): string {
      return internalHandler.get<string>(this, 'border', false);
    }

    public set border(value: string) {
      internalHandler.set<string>(this, 'border', value);
    }

    public get caption(): IHTMLTableCaptionElement | null {
      return internalHandler.get<IHTMLTableCaptionElement | null>(this, 'caption', true);
    }

    public set caption(value: IHTMLTableCaptionElement | null) {
      internalHandler.set<IHTMLTableCaptionElement | null>(this, 'caption', value);
    }

    public get cellPadding(): string {
      return internalHandler.get<string>(this, 'cellPadding', false);
    }

    public set cellPadding(value: string) {
      internalHandler.set<string>(this, 'cellPadding', value);
    }

    public get cellSpacing(): string {
      return internalHandler.get<string>(this, 'cellSpacing', false);
    }

    public set cellSpacing(value: string) {
      internalHandler.set<string>(this, 'cellSpacing', value);
    }

    public get frame(): string {
      return internalHandler.get<string>(this, 'frame', false);
    }

    public set frame(value: string) {
      internalHandler.set<string>(this, 'frame', value);
    }

    public get rows(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'rows', false);
    }

    public get rules(): string {
      return internalHandler.get<string>(this, 'rules', false);
    }

    public set rules(value: string) {
      internalHandler.set<string>(this, 'rules', value);
    }

    public get summary(): string {
      return internalHandler.get<string>(this, 'summary', false);
    }

    public set summary(value: string) {
      internalHandler.set<string>(this, 'summary', value);
    }

    public get tBodies(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'tBodies', false);
    }

    public get tFoot(): IHTMLTableSectionElement | null {
      return internalHandler.get<IHTMLTableSectionElement | null>(this, 'tFoot', true);
    }

    public set tFoot(value: IHTMLTableSectionElement | null) {
      internalHandler.set<IHTMLTableSectionElement | null>(this, 'tFoot', value);
    }

    public get tHead(): IHTMLTableSectionElement | null {
      return internalHandler.get<IHTMLTableSectionElement | null>(this, 'tHead', true);
    }

    public set tHead(value: IHTMLTableSectionElement | null) {
      internalHandler.set<IHTMLTableSectionElement | null>(this, 'tHead', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    // methods

    public createCaption(): IHTMLTableCaptionElement {
      return internalHandler.run<IHTMLTableCaptionElement>(this, 'createCaption', []);
    }

    public createTBody(): IHTMLTableSectionElement {
      return internalHandler.run<IHTMLTableSectionElement>(this, 'createTBody', []);
    }

    public createTFoot(): IHTMLTableSectionElement {
      return internalHandler.run<IHTMLTableSectionElement>(this, 'createTFoot', []);
    }

    public createTHead(): IHTMLTableSectionElement {
      return internalHandler.run<IHTMLTableSectionElement>(this, 'createTHead', []);
    }

    public deleteCaption(): void {
      internalHandler.run<void>(this, 'deleteCaption', []);
    }

    public deleteRow(index: number): void {
      internalHandler.run<void>(this, 'deleteRow', [index]);
    }

    public deleteTFoot(): void {
      internalHandler.run<void>(this, 'deleteTFoot', []);
    }

    public deleteTHead(): void {
      internalHandler.run<void>(this, 'deleteTHead', []);
    }

    public insertRow(index?: number): IHTMLTableRowElement {
      return internalHandler.run<IHTMLTableRowElement>(this, 'insertRow', [index]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableElementProperties extends IHTMLElementProperties {
  align?: string;
  bgColor?: string;
  border?: string;
  caption?: IHTMLTableCaptionElement | null;
  cellPadding?: string;
  cellSpacing?: string;
  frame?: string;
  rows?: IHTMLCollection;
  rules?: string;
  summary?: string;
  tBodies?: IHTMLCollection;
  tFoot?: IHTMLTableSectionElement | null;
  tHead?: IHTMLTableSectionElement | null;
  width?: string;
}

export interface IHTMLTableElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  rows?: IHTMLCollection;
  tBodies?: IHTMLCollection;
}

// tslint:disable-next-line:variable-name
export const HTMLTableElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'bgColor', 'border', 'caption', 'cellPadding', 'cellSpacing', 'frame', 'rows', 'rules', 'summary', 'tBodies', 'tFoot', 'tHead', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLTableElementConstantKeys = [...HTMLElementConstantKeys];

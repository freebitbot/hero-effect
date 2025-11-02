import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLTableCellElement, IHTMLTableRowElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableRowElement } = StateMachine<
  IHTMLTableRowElement,
  IHTMLTableRowElementProperties,
  IHTMLTableRowElementReadonlyProperties
>('HTMLTableRowElement');
export const internalHandler = new InternalHandler<IHTMLTableRowElement>('HTMLTableRowElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableRowElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableRowElement extends HTMLElement implements IHTMLTableRowElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableRowElement>(HTMLTableRowElement, this, internalHandler, HTMLTableRowElementConstantKeys, HTMLTableRowElementPropertyKeys);
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

    public get cells(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'cells', false);
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

    public get rowIndex(): number {
      return internalHandler.get<number>(this, 'rowIndex', false);
    }

    public get sectionRowIndex(): number {
      return internalHandler.get<number>(this, 'sectionRowIndex', false);
    }

    public get vAlign(): string {
      return internalHandler.get<string>(this, 'vAlign', false);
    }

    public set vAlign(value: string) {
      internalHandler.set<string>(this, 'vAlign', value);
    }

    // methods

    public deleteCell(index: number): void {
      internalHandler.run<void>(this, 'deleteCell', [index]);
    }

    public insertCell(index?: number): IHTMLTableCellElement {
      return internalHandler.run<IHTMLTableCellElement>(this, 'insertCell', [index]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableRowElementProperties extends IHTMLElementProperties {
  align?: string;
  bgColor?: string;
  cells?: IHTMLCollection;
  ch?: string;
  chOff?: string;
  rowIndex?: number;
  sectionRowIndex?: number;
  vAlign?: string;
}

export interface IHTMLTableRowElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  cells?: IHTMLCollection;
  rowIndex?: number;
  sectionRowIndex?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLTableRowElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'bgColor', 'cells', 'ch', 'chOff', 'rowIndex', 'sectionRowIndex', 'vAlign'];

// tslint:disable-next-line:variable-name
export const HTMLTableRowElementConstantKeys = [...HTMLElementConstantKeys];

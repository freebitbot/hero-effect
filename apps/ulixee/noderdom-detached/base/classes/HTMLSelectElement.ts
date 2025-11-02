import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLOptionsCollection, IHTMLCollection, IValidityState, INodeList, IElement, IHTMLOptionElement, IHTMLOptGroupElement, IHTMLSelectElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLSelectElement } = StateMachine<
  IHTMLSelectElement,
  IHTMLSelectElementProperties,
  IHTMLSelectElementReadonlyProperties
>('HTMLSelectElement');
export const internalHandler = new InternalHandler<IHTMLSelectElement>('HTMLSelectElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLSelectElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSelectElement extends HTMLElement implements IHTMLSelectElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLSelectElement>(HTMLSelectElement, this, internalHandler, HTMLSelectElementConstantKeys, HTMLSelectElementPropertyKeys);
    }

    // properties

    public get autocomplete(): string {
      return internalHandler.get<string>(this, 'autocomplete', false);
    }

    public set autocomplete(value: string) {
      internalHandler.set<string>(this, 'autocomplete', value);
    }

    public get disabled(): boolean {
      return internalHandler.get<boolean>(this, 'disabled', false);
    }

    public set disabled(value: boolean) {
      internalHandler.set<boolean>(this, 'disabled', value);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public get labels(): INodeList {
      return internalHandler.get<INodeList>(this, 'labels', false);
    }

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public set length(value: number) {
      internalHandler.set<number>(this, 'length', value);
    }

    public get multiple(): boolean {
      return internalHandler.get<boolean>(this, 'multiple', false);
    }

    public set multiple(value: boolean) {
      internalHandler.set<boolean>(this, 'multiple', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get options(): IHTMLOptionsCollection {
      return internalHandler.get<IHTMLOptionsCollection>(this, 'options', false);
    }

    public get required(): boolean {
      return internalHandler.get<boolean>(this, 'required', false);
    }

    public set required(value: boolean) {
      internalHandler.set<boolean>(this, 'required', value);
    }

    public get selectedIndex(): number {
      return internalHandler.get<number>(this, 'selectedIndex', false);
    }

    public set selectedIndex(value: number) {
      internalHandler.set<number>(this, 'selectedIndex', value);
    }

    public get selectedOptions(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'selectedOptions', false);
    }

    public get size(): number {
      return internalHandler.get<number>(this, 'size', false);
    }

    public set size(value: number) {
      internalHandler.set<number>(this, 'size', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public get validationMessage(): string {
      return internalHandler.get<string>(this, 'validationMessage', false);
    }

    public get validity(): IValidityState {
      return internalHandler.get<IValidityState>(this, 'validity', false);
    }

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }

    public get willValidate(): boolean {
      return internalHandler.get<boolean>(this, 'willValidate', false);
    }

    // methods

    public add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void {
      internalHandler.run<void>(this, 'add', [element, before]);
    }

    public checkValidity(): boolean {
      return internalHandler.run<boolean>(this, 'checkValidity', []);
    }

    public item(index: number): IElement | null {
      return internalHandler.run<IElement | null>(this, 'item', [index]);
    }

    public namedItem(name: string): IHTMLOptionElement | null {
      return internalHandler.run<IHTMLOptionElement | null>(this, 'namedItem', [name]);
    }

    public remove(index?: number): void {
      internalHandler.run<void>(this, 'remove', [index]);
    }

    public reportValidity(): boolean {
      return internalHandler.run<boolean>(this, 'reportValidity', []);
    }

    public setCustomValidity(error: string): void {
      internalHandler.run<void>(this, 'setCustomValidity', [error]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<IElement> {
      return internalHandler.run<IterableIterator<IElement>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: IElement;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLSelectElementProperties extends IHTMLElementProperties {
  autocomplete?: string;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  length?: number;
  multiple?: boolean;
  name?: string;
  options?: IHTMLOptionsCollection;
  required?: boolean;
  selectedIndex?: number;
  selectedOptions?: IHTMLCollection;
  size?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
}

export interface IHTMLSelectElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  options?: IHTMLOptionsCollection;
  selectedOptions?: IHTMLCollection;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLSelectElementPropertyKeys = [...HTMLElementPropertyKeys, 'autocomplete', 'disabled', 'form', 'labels', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLSelectElementConstantKeys = [...HTMLElementConstantKeys];

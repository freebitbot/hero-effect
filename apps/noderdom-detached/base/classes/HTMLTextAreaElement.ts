import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IValidityState, INodeList, ISelectionMode, IHTMLTextAreaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTextAreaElement } = StateMachine<
  IHTMLTextAreaElement,
  IHTMLTextAreaElementProperties,
  IHTMLTextAreaElementReadonlyProperties
>('HTMLTextAreaElement');
export const internalHandler = new InternalHandler<IHTMLTextAreaElement>('HTMLTextAreaElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTextAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTextAreaElement extends HTMLElement implements IHTMLTextAreaElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTextAreaElement>(HTMLTextAreaElement, this, internalHandler, HTMLTextAreaElementConstantKeys, HTMLTextAreaElementPropertyKeys);
    }

    // properties

    public get autocomplete(): string {
      return internalHandler.get<string>(this, 'autocomplete', false);
    }

    public set autocomplete(value: string) {
      internalHandler.set<string>(this, 'autocomplete', value);
    }

    public get autofocus(): boolean {
      return internalHandler.get<boolean>(this, 'autofocus', false);
    }

    public set autofocus(value: boolean) {
      internalHandler.set<boolean>(this, 'autofocus', value);
    }

    public get cols(): number {
      return internalHandler.get<number>(this, 'cols', false);
    }

    public set cols(value: number) {
      internalHandler.set<number>(this, 'cols', value);
    }

    public get defaultValue(): string {
      return internalHandler.get<string>(this, 'defaultValue', false);
    }

    public set defaultValue(value: string) {
      internalHandler.set<string>(this, 'defaultValue', value);
    }

    public get dirName(): string {
      return internalHandler.get<string>(this, 'dirName', false);
    }

    public set dirName(value: string) {
      internalHandler.set<string>(this, 'dirName', value);
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

    public get inputMode(): string {
      return internalHandler.get<string>(this, 'inputMode', false);
    }

    public set inputMode(value: string) {
      internalHandler.set<string>(this, 'inputMode', value);
    }

    public get labels(): INodeList {
      return internalHandler.get<INodeList>(this, 'labels', false);
    }

    public get maxLength(): number {
      return internalHandler.get<number>(this, 'maxLength', false);
    }

    public set maxLength(value: number) {
      internalHandler.set<number>(this, 'maxLength', value);
    }

    public get minLength(): number {
      return internalHandler.get<number>(this, 'minLength', false);
    }

    public set minLength(value: number) {
      internalHandler.set<number>(this, 'minLength', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get placeholder(): string {
      return internalHandler.get<string>(this, 'placeholder', false);
    }

    public set placeholder(value: string) {
      internalHandler.set<string>(this, 'placeholder', value);
    }

    public get readOnly(): boolean {
      return internalHandler.get<boolean>(this, 'readOnly', false);
    }

    public set readOnly(value: boolean) {
      internalHandler.set<boolean>(this, 'readOnly', value);
    }

    public get required(): boolean {
      return internalHandler.get<boolean>(this, 'required', false);
    }

    public set required(value: boolean) {
      internalHandler.set<boolean>(this, 'required', value);
    }

    public get rows(): number {
      return internalHandler.get<number>(this, 'rows', false);
    }

    public set rows(value: number) {
      internalHandler.set<number>(this, 'rows', value);
    }

    public get selectionDirection(): string {
      return internalHandler.get<string>(this, 'selectionDirection', false);
    }

    public set selectionDirection(value: string) {
      internalHandler.set<string>(this, 'selectionDirection', value);
    }

    public get selectionEnd(): number {
      return internalHandler.get<number>(this, 'selectionEnd', false);
    }

    public set selectionEnd(value: number) {
      internalHandler.set<number>(this, 'selectionEnd', value);
    }

    public get selectionStart(): number {
      return internalHandler.get<number>(this, 'selectionStart', false);
    }

    public set selectionStart(value: number) {
      internalHandler.set<number>(this, 'selectionStart', value);
    }

    public get textLength(): number {
      return internalHandler.get<number>(this, 'textLength', false);
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

    public get wrap(): string {
      return internalHandler.get<string>(this, 'wrap', false);
    }

    public set wrap(value: string) {
      internalHandler.set<string>(this, 'wrap', value);
    }

    // methods

    public checkValidity(): boolean {
      return internalHandler.run<boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return internalHandler.run<boolean>(this, 'reportValidity', []);
    }

    public select(): void {
      internalHandler.run<void>(this, 'select', []);
    }

    public setCustomValidity(error: string): void {
      internalHandler.run<void>(this, 'setCustomValidity', [error]);
    }

    public setRangeText(replacement: string): void {
      internalHandler.run<void>(this, 'setRangeText', [replacement]);
    }

    public setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void {
      internalHandler.run<void>(this, 'setRangeText', [replacement, start, end, selectionMode]);
    }

    public setSelectionRange(start: number, end: number, direction?: string): void {
      internalHandler.run<void>(this, 'setSelectionRange', [start, end, direction]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTextAreaElementProperties extends IHTMLElementProperties {
  autocomplete?: string;
  autofocus?: boolean;
  cols?: number;
  defaultValue?: string;
  dirName?: string;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  inputMode?: string;
  labels?: INodeList;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  selectionDirection?: string;
  selectionEnd?: number;
  selectionStart?: number;
  textLength?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
  wrap?: string;
}

export interface IHTMLTextAreaElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  textLength?: number;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLTextAreaElementPropertyKeys = [...HTMLElementPropertyKeys, 'autocomplete', 'autofocus', 'cols', 'defaultValue', 'dirName', 'disabled', 'form', 'inputMode', 'labels', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'rows', 'selectionDirection', 'selectionEnd', 'selectionStart', 'textLength', 'type', 'validationMessage', 'validity', 'value', 'willValidate', 'wrap'];

// tslint:disable-next-line:variable-name
export const HTMLTextAreaElementConstantKeys = [...HTMLElementConstantKeys];

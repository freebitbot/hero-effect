import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IFileList, IValidityState, INodeList, ISelectionMode, IHTMLInputElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLInputElement } = StateMachine<
  IHTMLInputElement,
  IHTMLInputElementProperties,
  IHTMLInputElementReadonlyProperties
>('HTMLInputElement');
export const internalHandler = new InternalHandler<IHTMLInputElement>('HTMLInputElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLInputElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLInputElement extends HTMLElement implements IHTMLInputElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLInputElement>(HTMLInputElement, this, internalHandler, HTMLInputElementConstantKeys, HTMLInputElementPropertyKeys);
    }

    // properties

    public get accept(): string {
      return internalHandler.get<string>(this, 'accept', false);
    }

    public set accept(value: string) {
      internalHandler.set<string>(this, 'accept', value);
    }

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get alt(): string {
      return internalHandler.get<string>(this, 'alt', false);
    }

    public set alt(value: string) {
      internalHandler.set<string>(this, 'alt', value);
    }

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

    public get checked(): boolean {
      return internalHandler.get<boolean>(this, 'checked', false);
    }

    public set checked(value: boolean) {
      internalHandler.set<boolean>(this, 'checked', value);
    }

    public get defaultChecked(): boolean {
      return internalHandler.get<boolean>(this, 'defaultChecked', false);
    }

    public set defaultChecked(value: boolean) {
      internalHandler.set<boolean>(this, 'defaultChecked', value);
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

    public get files(): IFileList | null {
      return internalHandler.get<IFileList | null>(this, 'files', true);
    }

    public set files(value: IFileList | null) {
      internalHandler.set<IFileList | null>(this, 'files', value);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public get formNoValidate(): boolean {
      return internalHandler.get<boolean>(this, 'formNoValidate', false);
    }

    public set formNoValidate(value: boolean) {
      internalHandler.set<boolean>(this, 'formNoValidate', value);
    }

    public get formTarget(): string {
      return internalHandler.get<string>(this, 'formTarget', false);
    }

    public set formTarget(value: string) {
      internalHandler.set<string>(this, 'formTarget', value);
    }

    public get indeterminate(): boolean {
      return internalHandler.get<boolean>(this, 'indeterminate', false);
    }

    public set indeterminate(value: boolean) {
      internalHandler.set<boolean>(this, 'indeterminate', value);
    }

    public get inputMode(): string {
      return internalHandler.get<string>(this, 'inputMode', false);
    }

    public set inputMode(value: string) {
      internalHandler.set<string>(this, 'inputMode', value);
    }

    public get labels(): INodeList | null {
      return internalHandler.get<INodeList | null>(this, 'labels', true);
    }

    public get list(): IHTMLElement | null {
      return internalHandler.get<IHTMLElement | null>(this, 'list', true);
    }

    public get max(): string {
      return internalHandler.get<string>(this, 'max', false);
    }

    public set max(value: string) {
      internalHandler.set<string>(this, 'max', value);
    }

    public get maxLength(): number {
      return internalHandler.get<number>(this, 'maxLength', false);
    }

    public set maxLength(value: number) {
      internalHandler.set<number>(this, 'maxLength', value);
    }

    public get min(): string {
      return internalHandler.get<string>(this, 'min', false);
    }

    public set min(value: string) {
      internalHandler.set<string>(this, 'min', value);
    }

    public get minLength(): number {
      return internalHandler.get<number>(this, 'minLength', false);
    }

    public set minLength(value: number) {
      internalHandler.set<number>(this, 'minLength', value);
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

    public get pattern(): string {
      return internalHandler.get<string>(this, 'pattern', false);
    }

    public set pattern(value: string) {
      internalHandler.set<string>(this, 'pattern', value);
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

    public get selectionDirection(): string | null {
      return internalHandler.get<string | null>(this, 'selectionDirection', true);
    }

    public set selectionDirection(value: string | null) {
      internalHandler.set<string | null>(this, 'selectionDirection', value);
    }

    public get selectionEnd(): number | null {
      return internalHandler.get<number | null>(this, 'selectionEnd', true);
    }

    public set selectionEnd(value: number | null) {
      internalHandler.set<number | null>(this, 'selectionEnd', value);
    }

    public get selectionStart(): number | null {
      return internalHandler.get<number | null>(this, 'selectionStart', true);
    }

    public set selectionStart(value: number | null) {
      internalHandler.set<number | null>(this, 'selectionStart', value);
    }

    public get size(): number {
      return internalHandler.get<number>(this, 'size', false);
    }

    public set size(value: number) {
      internalHandler.set<number>(this, 'size', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get step(): string {
      return internalHandler.get<string>(this, 'step', false);
    }

    public set step(value: string) {
      internalHandler.set<string>(this, 'step', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public get useMap(): string {
      return internalHandler.get<string>(this, 'useMap', false);
    }

    public set useMap(value: string) {
      internalHandler.set<string>(this, 'useMap', value);
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

    public get valueAsDate(): any {
      return internalHandler.get<any>(this, 'valueAsDate', false);
    }

    public set valueAsDate(value: any) {
      internalHandler.set<any>(this, 'valueAsDate', value);
    }

    public get valueAsNumber(): number {
      return internalHandler.get<number>(this, 'valueAsNumber', false);
    }

    public set valueAsNumber(value: number) {
      internalHandler.set<number>(this, 'valueAsNumber', value);
    }

    public get willValidate(): boolean {
      return internalHandler.get<boolean>(this, 'willValidate', false);
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

    public stepDown(n?: number): void {
      internalHandler.run<void>(this, 'stepDown', [n]);
    }

    public stepUp(n?: number): void {
      internalHandler.run<void>(this, 'stepUp', [n]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLInputElementProperties extends IHTMLElementProperties {
  accept?: string;
  align?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  defaultValue?: string;
  dirName?: string;
  disabled?: boolean;
  files?: IFileList | null;
  form?: IHTMLFormElement | null;
  formNoValidate?: boolean;
  formTarget?: string;
  indeterminate?: boolean;
  inputMode?: string;
  labels?: INodeList | null;
  list?: IHTMLElement | null;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  selectionDirection?: string | null;
  selectionEnd?: number | null;
  selectionStart?: number | null;
  size?: number;
  src?: string;
  step?: string;
  type?: string;
  useMap?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  valueAsDate?: any;
  valueAsNumber?: number;
  willValidate?: boolean;
}

export interface IHTMLInputElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList | null;
  list?: IHTMLElement | null;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLInputElementPropertyKeys = [...HTMLElementPropertyKeys, 'accept', 'align', 'alt', 'autocomplete', 'autofocus', 'checked', 'defaultChecked', 'defaultValue', 'dirName', 'disabled', 'files', 'form', 'formNoValidate', 'formTarget', 'indeterminate', 'inputMode', 'labels', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'src', 'step', 'type', 'useMap', 'validationMessage', 'validity', 'value', 'valueAsDate', 'valueAsNumber', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLInputElementConstantKeys = [...HTMLElementConstantKeys];

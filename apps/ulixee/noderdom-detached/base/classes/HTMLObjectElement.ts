import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IDocument, IValidityState, IHTMLObjectElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLObjectElement } = StateMachine<
  IHTMLObjectElement,
  IHTMLObjectElementProperties,
  IHTMLObjectElementReadonlyProperties
>('HTMLObjectElement');
export const internalHandler = new InternalHandler<IHTMLObjectElement>('HTMLObjectElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLObjectElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLObjectElement extends HTMLElement implements IHTMLObjectElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLObjectElement>(HTMLObjectElement, this, internalHandler, HTMLObjectElementConstantKeys, HTMLObjectElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get archive(): string {
      return internalHandler.get<string>(this, 'archive', false);
    }

    public set archive(value: string) {
      internalHandler.set<string>(this, 'archive', value);
    }

    public get border(): string {
      return internalHandler.get<string>(this, 'border', false);
    }

    public set border(value: string) {
      internalHandler.set<string>(this, 'border', value);
    }

    public get code(): string {
      return internalHandler.get<string>(this, 'code', false);
    }

    public set code(value: string) {
      internalHandler.set<string>(this, 'code', value);
    }

    public get codeBase(): string {
      return internalHandler.get<string>(this, 'codeBase', false);
    }

    public set codeBase(value: string) {
      internalHandler.set<string>(this, 'codeBase', value);
    }

    public get codeType(): string {
      return internalHandler.get<string>(this, 'codeType', false);
    }

    public set codeType(value: string) {
      internalHandler.set<string>(this, 'codeType', value);
    }

    public get contentDocument(): IDocument | null {
      return internalHandler.get<IDocument | null>(this, 'contentDocument', true);
    }

    public get data(): string {
      return internalHandler.get<string>(this, 'data', false);
    }

    public set data(value: string) {
      internalHandler.set<string>(this, 'data', value);
    }

    public get declare(): boolean {
      return internalHandler.get<boolean>(this, 'declare', false);
    }

    public set declare(value: boolean) {
      internalHandler.set<boolean>(this, 'declare', value);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public get height(): string {
      return internalHandler.get<string>(this, 'height', false);
    }

    public set height(value: string) {
      internalHandler.set<string>(this, 'height', value);
    }

    public get hspace(): number {
      return internalHandler.get<number>(this, 'hspace', false);
    }

    public set hspace(value: number) {
      internalHandler.set<number>(this, 'hspace', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get standby(): string {
      return internalHandler.get<string>(this, 'standby', false);
    }

    public set standby(value: string) {
      internalHandler.set<string>(this, 'standby', value);
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

    public get vspace(): number {
      return internalHandler.get<number>(this, 'vspace', false);
    }

    public set vspace(value: number) {
      internalHandler.set<number>(this, 'vspace', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
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

    public setCustomValidity(error: string): void {
      internalHandler.run<void>(this, 'setCustomValidity', [error]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLObjectElementProperties extends IHTMLElementProperties {
  align?: string;
  archive?: string;
  border?: string;
  code?: string;
  codeBase?: string;
  codeType?: string;
  contentDocument?: IDocument | null;
  data?: string;
  declare?: boolean;
  form?: IHTMLFormElement | null;
  height?: string;
  hspace?: number;
  name?: string;
  standby?: string;
  type?: string;
  useMap?: string;
  validationMessage?: string;
  validity?: IValidityState;
  vspace?: number;
  width?: string;
  willValidate?: boolean;
}

export interface IHTMLObjectElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  contentDocument?: IDocument | null;
  form?: IHTMLFormElement | null;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLObjectElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'archive', 'border', 'code', 'codeBase', 'codeType', 'contentDocument', 'data', 'declare', 'form', 'height', 'hspace', 'name', 'standby', 'type', 'useMap', 'validationMessage', 'validity', 'vspace', 'width', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLObjectElementConstantKeys = [...HTMLElementConstantKeys];

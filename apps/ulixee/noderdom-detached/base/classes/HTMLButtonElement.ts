import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IValidityState, INodeList, IHTMLButtonElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLButtonElement } = StateMachine<
  IHTMLButtonElement,
  IHTMLButtonElementProperties,
  IHTMLButtonElementReadonlyProperties
>('HTMLButtonElement');
export const internalHandler = new InternalHandler<IHTMLButtonElement>('HTMLButtonElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLButtonElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLButtonElement extends HTMLElement implements IHTMLButtonElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLButtonElement>(HTMLButtonElement, this, internalHandler, HTMLButtonElementConstantKeys, HTMLButtonElementPropertyKeys);
    }

    // properties

    public get autofocus(): boolean {
      return internalHandler.get<boolean>(this, 'autofocus', false);
    }

    public set autofocus(value: boolean) {
      internalHandler.set<boolean>(this, 'autofocus', value);
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

    public get labels(): INodeList {
      return internalHandler.get<INodeList>(this, 'labels', false);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
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

    public checkValidity(): boolean {
      return internalHandler.run<boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return internalHandler.run<boolean>(this, 'reportValidity', []);
    }

    public setCustomValidity(error: string): void {
      internalHandler.run<void>(this, 'setCustomValidity', [error]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLButtonElementProperties extends IHTMLElementProperties {
  autofocus?: boolean;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  formNoValidate?: boolean;
  formTarget?: string;
  labels?: INodeList;
  name?: string;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
}

export interface IHTMLButtonElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  labels?: INodeList;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLButtonElementPropertyKeys = [...HTMLElementPropertyKeys, 'autofocus', 'disabled', 'form', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLButtonElementConstantKeys = [...HTMLElementConstantKeys];

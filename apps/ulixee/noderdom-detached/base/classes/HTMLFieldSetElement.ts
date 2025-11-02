import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLCollection, IValidityState, IHTMLFieldSetElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFieldSetElement } = StateMachine<
  IHTMLFieldSetElement,
  IHTMLFieldSetElementProperties,
  IHTMLFieldSetElementReadonlyProperties
>('HTMLFieldSetElement');
export const internalHandler = new InternalHandler<IHTMLFieldSetElement>('HTMLFieldSetElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFieldSetElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFieldSetElement extends HTMLElement implements IHTMLFieldSetElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFieldSetElement>(HTMLFieldSetElement, this, internalHandler, HTMLFieldSetElementConstantKeys, HTMLFieldSetElementPropertyKeys);
    }

    // properties

    public get disabled(): boolean {
      return internalHandler.get<boolean>(this, 'disabled', false);
    }

    public set disabled(value: boolean) {
      internalHandler.set<boolean>(this, 'disabled', value);
    }

    public get elements(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'elements', false);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
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

    public get validationMessage(): string {
      return internalHandler.get<string>(this, 'validationMessage', false);
    }

    public get validity(): IValidityState {
      return internalHandler.get<IValidityState>(this, 'validity', false);
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFieldSetElementProperties extends IHTMLElementProperties {
  disabled?: boolean;
  elements?: IHTMLCollection;
  form?: IHTMLFormElement | null;
  name?: string;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

export interface IHTMLFieldSetElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  elements?: IHTMLCollection;
  form?: IHTMLFormElement | null;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLFieldSetElementPropertyKeys = [...HTMLElementPropertyKeys, 'disabled', 'elements', 'form', 'name', 'type', 'validationMessage', 'validity', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLFieldSetElementConstantKeys = [...HTMLElementConstantKeys];

import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLFormElement, IValidityState, INodeList, IHTMLOutputElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLOutputElement } = StateMachine<
  IHTMLOutputElement,
  IHTMLOutputElementProperties,
  IHTMLOutputElementReadonlyProperties
>('HTMLOutputElement');
export const internalHandler = new InternalHandler<IHTMLOutputElement>('HTMLOutputElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLOutputElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOutputElement extends HTMLElement implements IHTMLOutputElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLOutputElement>(HTMLOutputElement, this, internalHandler, HTMLOutputElementConstantKeys, HTMLOutputElementPropertyKeys);
    }

    // properties

    public get defaultValue(): string {
      return internalHandler.get<string>(this, 'defaultValue', false);
    }

    public set defaultValue(value: string) {
      internalHandler.set<string>(this, 'defaultValue', value);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public get htmlFor(): IDOMTokenList {
      return internalHandler.get<IDOMTokenList>(this, 'htmlFor', false);
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOutputElementProperties extends IHTMLElementProperties {
  defaultValue?: string;
  form?: IHTMLFormElement | null;
  htmlFor?: IDOMTokenList;
  labels?: INodeList;
  name?: string;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  value?: string;
  willValidate?: boolean;
}

export interface IHTMLOutputElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  htmlFor?: IDOMTokenList;
  labels?: INodeList;
  type?: string;
  validationMessage?: string;
  validity?: IValidityState;
  willValidate?: boolean;
}

// tslint:disable-next-line:variable-name
export const HTMLOutputElementPropertyKeys = [...HTMLElementPropertyKeys, 'defaultValue', 'form', 'htmlFor', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];

// tslint:disable-next-line:variable-name
export const HTMLOutputElementConstantKeys = [...HTMLElementConstantKeys];

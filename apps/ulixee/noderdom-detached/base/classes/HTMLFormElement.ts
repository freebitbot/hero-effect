import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormControlsCollection, IHTMLFormElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFormElement } = StateMachine<
  IHTMLFormElement,
  IHTMLFormElementProperties,
  IHTMLFormElementReadonlyProperties
>('HTMLFormElement');
export const internalHandler = new InternalHandler<IHTMLFormElement>('HTMLFormElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFormElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFormElement extends HTMLElement implements IHTMLFormElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFormElement>(HTMLFormElement, this, internalHandler, HTMLFormElementConstantKeys, HTMLFormElementPropertyKeys);
    }

    // properties

    public get acceptCharset(): string {
      return internalHandler.get<string>(this, 'acceptCharset', false);
    }

    public set acceptCharset(value: string) {
      internalHandler.set<string>(this, 'acceptCharset', value);
    }

    public get action(): string {
      return internalHandler.get<string>(this, 'action', false);
    }

    public set action(value: string) {
      internalHandler.set<string>(this, 'action', value);
    }

    public get elements(): IHTMLFormControlsCollection {
      return internalHandler.get<IHTMLFormControlsCollection>(this, 'elements', false);
    }

    public get enctype(): string {
      return internalHandler.get<string>(this, 'enctype', false);
    }

    public set enctype(value: string) {
      internalHandler.set<string>(this, 'enctype', value);
    }

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public get method(): string {
      return internalHandler.get<string>(this, 'method', false);
    }

    public set method(value: string) {
      internalHandler.set<string>(this, 'method', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get noValidate(): boolean {
      return internalHandler.get<boolean>(this, 'noValidate', false);
    }

    public set noValidate(value: boolean) {
      internalHandler.set<boolean>(this, 'noValidate', value);
    }

    public get target(): string {
      return internalHandler.get<string>(this, 'target', false);
    }

    public set target(value: string) {
      internalHandler.set<string>(this, 'target', value);
    }

    // methods

    public checkValidity(): boolean {
      return internalHandler.run<boolean>(this, 'checkValidity', []);
    }

    public reportValidity(): boolean {
      return internalHandler.run<boolean>(this, 'reportValidity', []);
    }

    public requestSubmit(submitter?: IHTMLElement): void {
      internalHandler.run<void>(this, 'requestSubmit', [submitter]);
    }

    public reset(): void {
      internalHandler.run<void>(this, 'reset', []);
    }

    public submit(): void {
      internalHandler.run<void>(this, 'submit', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFormElementProperties extends IHTMLElementProperties {
  acceptCharset?: string;
  action?: string;
  elements?: IHTMLFormControlsCollection;
  enctype?: string;
  length?: number;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string;
}

export interface IHTMLFormElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  elements?: IHTMLFormControlsCollection;
  length?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLFormElementPropertyKeys = [...HTMLElementPropertyKeys, 'acceptCharset', 'action', 'elements', 'enctype', 'length', 'method', 'name', 'noValidate', 'target'];

// tslint:disable-next-line:variable-name
export const HTMLFormElementConstantKeys = [...HTMLElementConstantKeys];

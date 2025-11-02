import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLOptionElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLOptionElement } = StateMachine<
  IHTMLOptionElement,
  IHTMLOptionElementProperties,
  IHTMLOptionElementReadonlyProperties
>('HTMLOptionElement');
export const internalHandler = new InternalHandler<IHTMLOptionElement>('HTMLOptionElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLOptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptionElement extends HTMLElement implements IHTMLOptionElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLOptionElement>(HTMLOptionElement, this, internalHandler, HTMLOptionElementConstantKeys, HTMLOptionElementPropertyKeys);
    }

    // properties

    public get defaultSelected(): boolean {
      return internalHandler.get<boolean>(this, 'defaultSelected', false);
    }

    public set defaultSelected(value: boolean) {
      internalHandler.set<boolean>(this, 'defaultSelected', value);
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

    public get index(): number {
      return internalHandler.get<number>(this, 'index', false);
    }

    public get label(): string {
      return internalHandler.get<string>(this, 'label', false);
    }

    public set label(value: string) {
      internalHandler.set<string>(this, 'label', value);
    }

    public get selected(): boolean {
      return internalHandler.get<boolean>(this, 'selected', false);
    }

    public set selected(value: boolean) {
      internalHandler.set<boolean>(this, 'selected', value);
    }

    public get text(): string {
      return internalHandler.get<string>(this, 'text', false);
    }

    public set text(value: string) {
      internalHandler.set<string>(this, 'text', value);
    }

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOptionElementProperties extends IHTMLElementProperties {
  defaultSelected?: boolean;
  disabled?: boolean;
  form?: IHTMLFormElement | null;
  index?: number;
  label?: string;
  selected?: boolean;
  text?: string;
  value?: string;
}

export interface IHTMLOptionElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
  index?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLOptionElementPropertyKeys = [...HTMLElementPropertyKeys, 'defaultSelected', 'disabled', 'form', 'index', 'label', 'selected', 'text', 'value'];

// tslint:disable-next-line:variable-name
export const HTMLOptionElementConstantKeys = [...HTMLElementConstantKeys];

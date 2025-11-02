import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLLabelElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLLabelElement } = StateMachine<
  IHTMLLabelElement,
  IHTMLLabelElementProperties,
  IHTMLLabelElementReadonlyProperties
>('HTMLLabelElement');
export const internalHandler = new InternalHandler<IHTMLLabelElement>('HTMLLabelElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLLabelElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLabelElement extends HTMLElement implements IHTMLLabelElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLLabelElement>(HTMLLabelElement, this, internalHandler, HTMLLabelElementConstantKeys, HTMLLabelElementPropertyKeys);
    }

    // properties

    public get control(): IHTMLElement | null {
      return internalHandler.get<IHTMLElement | null>(this, 'control', true);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public get htmlFor(): string {
      return internalHandler.get<string>(this, 'htmlFor', false);
    }

    public set htmlFor(value: string) {
      internalHandler.set<string>(this, 'htmlFor', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLLabelElementProperties extends IHTMLElementProperties {
  control?: IHTMLElement | null;
  form?: IHTMLFormElement | null;
  htmlFor?: string;
}

export interface IHTMLLabelElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  control?: IHTMLElement | null;
  form?: IHTMLFormElement | null;
}

// tslint:disable-next-line:variable-name
export const HTMLLabelElementPropertyKeys = [...HTMLElementPropertyKeys, 'control', 'form', 'htmlFor'];

// tslint:disable-next-line:variable-name
export const HTMLLabelElementConstantKeys = [...HTMLElementConstantKeys];

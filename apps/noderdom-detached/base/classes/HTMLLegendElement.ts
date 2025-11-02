import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLLegendElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLLegendElement } = StateMachine<
  IHTMLLegendElement,
  IHTMLLegendElementProperties,
  IHTMLLegendElementReadonlyProperties
>('HTMLLegendElement');
export const internalHandler = new InternalHandler<IHTMLLegendElement>('HTMLLegendElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLLegendElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLegendElement extends HTMLElement implements IHTMLLegendElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLLegendElement>(HTMLLegendElement, this, internalHandler, HTMLLegendElementConstantKeys, HTMLLegendElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get form(): IHTMLFormElement | null {
      return internalHandler.get<IHTMLFormElement | null>(this, 'form', true);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLLegendElementProperties extends IHTMLElementProperties {
  align?: string;
  form?: IHTMLFormElement | null;
}

export interface IHTMLLegendElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
}

// tslint:disable-next-line:variable-name
export const HTMLLegendElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'form'];

// tslint:disable-next-line:variable-name
export const HTMLLegendElementConstantKeys = [...HTMLElementConstantKeys];

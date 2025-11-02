import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLLIElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLLIElement } = StateMachine<
  IHTMLLIElement,
  IHTMLLIElementProperties,
  IHTMLLIElementReadonlyProperties
>('HTMLLIElement');
export const internalHandler = new InternalHandler<IHTMLLIElement>('HTMLLIElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLLIElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLIElement extends HTMLElement implements IHTMLLIElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLLIElement>(HTMLLIElement, this, internalHandler, HTMLLIElementConstantKeys, HTMLLIElementPropertyKeys);
    }

    // properties

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public get value(): number {
      return internalHandler.get<number>(this, 'value', false);
    }

    public set value(value: number) {
      internalHandler.set<number>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLLIElementProperties extends IHTMLElementProperties {
  type?: string;
  value?: number;
}

export interface IHTMLLIElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLLIElementPropertyKeys = [...HTMLElementPropertyKeys, 'type', 'value'];

// tslint:disable-next-line:variable-name
export const HTMLLIElementConstantKeys = [...HTMLElementConstantKeys];

import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLParamElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLParamElement } = StateMachine<
  IHTMLParamElement,
  IHTMLParamElementProperties,
  IHTMLParamElementReadonlyProperties
>('HTMLParamElement');
export const internalHandler = new InternalHandler<IHTMLParamElement>('HTMLParamElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLParamElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParamElement extends HTMLElement implements IHTMLParamElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLParamElement>(HTMLParamElement, this, internalHandler, HTMLParamElementConstantKeys, HTMLParamElementPropertyKeys);
    }

    // properties

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

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }

    public get valueType(): string {
      return internalHandler.get<string>(this, 'valueType', false);
    }

    public set valueType(value: string) {
      internalHandler.set<string>(this, 'valueType', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLParamElementProperties extends IHTMLElementProperties {
  name?: string;
  type?: string;
  value?: string;
  valueType?: string;
}

export interface IHTMLParamElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLParamElementPropertyKeys = [...HTMLElementPropertyKeys, 'name', 'type', 'value', 'valueType'];

// tslint:disable-next-line:variable-name
export const HTMLParamElementConstantKeys = [...HTMLElementConstantKeys];

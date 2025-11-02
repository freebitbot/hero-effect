import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, INodeList, IHTMLMeterElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMeterElement } = StateMachine<
  IHTMLMeterElement,
  IHTMLMeterElementProperties,
  IHTMLMeterElementReadonlyProperties
>('HTMLMeterElement');
export const internalHandler = new InternalHandler<IHTMLMeterElement>('HTMLMeterElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMeterElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMeterElement extends HTMLElement implements IHTMLMeterElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMeterElement>(HTMLMeterElement, this, internalHandler, HTMLMeterElementConstantKeys, HTMLMeterElementPropertyKeys);
    }

    // properties

    public get high(): number {
      return internalHandler.get<number>(this, 'high', false);
    }

    public set high(value: number) {
      internalHandler.set<number>(this, 'high', value);
    }

    public get labels(): INodeList {
      return internalHandler.get<INodeList>(this, 'labels', false);
    }

    public get low(): number {
      return internalHandler.get<number>(this, 'low', false);
    }

    public set low(value: number) {
      internalHandler.set<number>(this, 'low', value);
    }

    public get max(): number {
      return internalHandler.get<number>(this, 'max', false);
    }

    public set max(value: number) {
      internalHandler.set<number>(this, 'max', value);
    }

    public get min(): number {
      return internalHandler.get<number>(this, 'min', false);
    }

    public set min(value: number) {
      internalHandler.set<number>(this, 'min', value);
    }

    public get optimum(): number {
      return internalHandler.get<number>(this, 'optimum', false);
    }

    public set optimum(value: number) {
      internalHandler.set<number>(this, 'optimum', value);
    }

    public get value(): number {
      return internalHandler.get<number>(this, 'value', false);
    }

    public set value(value: number) {
      internalHandler.set<number>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMeterElementProperties extends IHTMLElementProperties {
  high?: number;
  labels?: INodeList;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

export interface IHTMLMeterElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  labels?: INodeList;
}

// tslint:disable-next-line:variable-name
export const HTMLMeterElementPropertyKeys = [...HTMLElementPropertyKeys, 'high', 'labels', 'low', 'max', 'min', 'optimum', 'value'];

// tslint:disable-next-line:variable-name
export const HTMLMeterElementConstantKeys = [...HTMLElementConstantKeys];

import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, INodeList, IHTMLProgressElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLProgressElement } = StateMachine<
  IHTMLProgressElement,
  IHTMLProgressElementProperties,
  IHTMLProgressElementReadonlyProperties
>('HTMLProgressElement');
export const internalHandler = new InternalHandler<IHTMLProgressElement>('HTMLProgressElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLProgressElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLProgressElement extends HTMLElement implements IHTMLProgressElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLProgressElement>(HTMLProgressElement, this, internalHandler, HTMLProgressElementConstantKeys, HTMLProgressElementPropertyKeys);
    }

    // properties

    public get labels(): INodeList {
      return internalHandler.get<INodeList>(this, 'labels', false);
    }

    public get max(): number {
      return internalHandler.get<number>(this, 'max', false);
    }

    public set max(value: number) {
      internalHandler.set<number>(this, 'max', value);
    }

    public get position(): number {
      return internalHandler.get<number>(this, 'position', false);
    }

    public get value(): number {
      return internalHandler.get<number>(this, 'value', false);
    }

    public set value(value: number) {
      internalHandler.set<number>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLProgressElementProperties extends IHTMLElementProperties {
  labels?: INodeList;
  max?: number;
  position?: number;
  value?: number;
}

export interface IHTMLProgressElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  labels?: INodeList;
  position?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLProgressElementPropertyKeys = [...HTMLElementPropertyKeys, 'labels', 'max', 'position', 'value'];

// tslint:disable-next-line:variable-name
export const HTMLProgressElementConstantKeys = [...HTMLElementConstantKeys];

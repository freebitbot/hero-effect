import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLPreElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLPreElement } = StateMachine<
  IHTMLPreElement,
  IHTMLPreElementProperties,
  IHTMLPreElementReadonlyProperties
>('HTMLPreElement');
export const internalHandler = new InternalHandler<IHTMLPreElement>('HTMLPreElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLPreElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLPreElement extends HTMLElement implements IHTMLPreElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLPreElement>(HTMLPreElement, this, internalHandler, HTMLPreElementConstantKeys, HTMLPreElementPropertyKeys);
    }

    // properties

    public get width(): number {
      return internalHandler.get<number>(this, 'width', false);
    }

    public set width(value: number) {
      internalHandler.set<number>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPreElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPreElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLPreElementProperties extends IHTMLElementProperties {
  width?: number;
}

export interface IHTMLPreElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLPreElementPropertyKeys = [...HTMLElementPropertyKeys, 'width'];

// tslint:disable-next-line:variable-name
export const HTMLPreElementConstantKeys = [...HTMLElementConstantKeys];

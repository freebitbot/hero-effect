import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLOListElement } = StateMachine<
  IHTMLOListElement,
  IHTMLOListElementProperties,
  IHTMLOListElementReadonlyProperties
>('HTMLOListElement');
export const internalHandler = new InternalHandler<IHTMLOListElement>('HTMLOListElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLOListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOListElement extends HTMLElement implements IHTMLOListElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLOListElement>(HTMLOListElement, this, internalHandler, HTMLOListElementConstantKeys, HTMLOListElementPropertyKeys);
    }

    // properties

    public get compact(): boolean {
      return internalHandler.get<boolean>(this, 'compact', false);
    }

    public set compact(value: boolean) {
      internalHandler.set<boolean>(this, 'compact', value);
    }

    public get reversed(): boolean {
      return internalHandler.get<boolean>(this, 'reversed', false);
    }

    public set reversed(value: boolean) {
      internalHandler.set<boolean>(this, 'reversed', value);
    }

    public get start(): number {
      return internalHandler.get<number>(this, 'start', false);
    }

    public set start(value: number) {
      internalHandler.set<number>(this, 'start', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOListElementProperties extends IHTMLElementProperties {
  compact?: boolean;
  reversed?: boolean;
  start?: number;
  type?: string;
}

export interface IHTMLOListElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLOListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact', 'reversed', 'start', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLOListElementConstantKeys = [...HTMLElementConstantKeys];

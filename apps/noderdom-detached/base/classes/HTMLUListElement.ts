import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLUListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLUListElement } = StateMachine<
  IHTMLUListElement,
  IHTMLUListElementProperties,
  IHTMLUListElementReadonlyProperties
>('HTMLUListElement');
export const internalHandler = new InternalHandler<IHTMLUListElement>('HTMLUListElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLUListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLUListElement extends HTMLElement implements IHTMLUListElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLUListElement>(HTMLUListElement, this, internalHandler, HTMLUListElementConstantKeys, HTMLUListElementPropertyKeys);
    }

    // properties

    public get compact(): boolean {
      return internalHandler.get<boolean>(this, 'compact', false);
    }

    public set compact(value: boolean) {
      internalHandler.set<boolean>(this, 'compact', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLUListElementProperties extends IHTMLElementProperties {
  compact?: boolean;
  type?: string;
}

export interface IHTMLUListElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLUListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLUListElementConstantKeys = [...HTMLElementConstantKeys];

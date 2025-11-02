import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLModElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLModElement } = StateMachine<
  IHTMLModElement,
  IHTMLModElementProperties,
  IHTMLModElementReadonlyProperties
>('HTMLModElement');
export const internalHandler = new InternalHandler<IHTMLModElement>('HTMLModElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLModElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLModElement extends HTMLElement implements IHTMLModElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLModElement>(HTMLModElement, this, internalHandler, HTMLModElementConstantKeys, HTMLModElementPropertyKeys);
    }

    // properties

    public get cite(): string {
      return internalHandler.get<string>(this, 'cite', false);
    }

    public set cite(value: string) {
      internalHandler.set<string>(this, 'cite', value);
    }

    public get dateTime(): string {
      return internalHandler.get<string>(this, 'dateTime', false);
    }

    public set dateTime(value: string) {
      internalHandler.set<string>(this, 'dateTime', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLModElementProperties extends IHTMLElementProperties {
  cite?: string;
  dateTime?: string;
}

export interface IHTMLModElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLModElementPropertyKeys = [...HTMLElementPropertyKeys, 'cite', 'dateTime'];

// tslint:disable-next-line:variable-name
export const HTMLModElementConstantKeys = [...HTMLElementConstantKeys];

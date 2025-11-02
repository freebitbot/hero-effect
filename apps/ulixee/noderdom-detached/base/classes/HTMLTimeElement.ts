import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTimeElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTimeElement } = StateMachine<
  IHTMLTimeElement,
  IHTMLTimeElementProperties,
  IHTMLTimeElementReadonlyProperties
>('HTMLTimeElement');
export const internalHandler = new InternalHandler<IHTMLTimeElement>('HTMLTimeElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTimeElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTimeElement extends HTMLElement implements IHTMLTimeElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTimeElement>(HTMLTimeElement, this, internalHandler, HTMLTimeElementConstantKeys, HTMLTimeElementPropertyKeys);
    }

    // properties

    public get dateTime(): string {
      return internalHandler.get<string>(this, 'dateTime', false);
    }

    public set dateTime(value: string) {
      internalHandler.set<string>(this, 'dateTime', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTimeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTimeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTimeElementProperties extends IHTMLElementProperties {
  dateTime?: string;
}

export interface IHTMLTimeElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLTimeElementPropertyKeys = [...HTMLElementPropertyKeys, 'dateTime'];

// tslint:disable-next-line:variable-name
export const HTMLTimeElementConstantKeys = [...HTMLElementConstantKeys];

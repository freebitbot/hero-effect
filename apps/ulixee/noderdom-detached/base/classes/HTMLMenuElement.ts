import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLMenuElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMenuElement } = StateMachine<
  IHTMLMenuElement,
  IHTMLMenuElementProperties,
  IHTMLMenuElementReadonlyProperties
>('HTMLMenuElement');
export const internalHandler = new InternalHandler<IHTMLMenuElement>('HTMLMenuElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMenuElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMenuElement extends HTMLElement implements IHTMLMenuElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMenuElement>(HTMLMenuElement, this, internalHandler, HTMLMenuElementConstantKeys, HTMLMenuElementPropertyKeys);
    }

    // properties

    public get compact(): boolean {
      return internalHandler.get<boolean>(this, 'compact', false);
    }

    public set compact(value: boolean) {
      internalHandler.set<boolean>(this, 'compact', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMenuElementProperties extends IHTMLElementProperties {
  compact?: boolean;
}

export interface IHTMLMenuElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLMenuElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact'];

// tslint:disable-next-line:variable-name
export const HTMLMenuElementConstantKeys = [...HTMLElementConstantKeys];

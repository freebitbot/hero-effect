import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDetailsElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDetailsElement } = StateMachine<
  IHTMLDetailsElement,
  IHTMLDetailsElementProperties,
  IHTMLDetailsElementReadonlyProperties
>('HTMLDetailsElement');
export const internalHandler = new InternalHandler<IHTMLDetailsElement>('HTMLDetailsElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDetailsElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDetailsElement extends HTMLElement implements IHTMLDetailsElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDetailsElement>(HTMLDetailsElement, this, internalHandler, HTMLDetailsElementConstantKeys, HTMLDetailsElementPropertyKeys);
    }

    // properties

    public get open(): boolean {
      return internalHandler.get<boolean>(this, 'open', false);
    }

    public set open(value: boolean) {
      internalHandler.set<boolean>(this, 'open', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDetailsElementProperties extends IHTMLElementProperties {
  open?: boolean;
}

export interface IHTMLDetailsElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDetailsElementPropertyKeys = [...HTMLElementPropertyKeys, 'open'];

// tslint:disable-next-line:variable-name
export const HTMLDetailsElementConstantKeys = [...HTMLElementConstantKeys];

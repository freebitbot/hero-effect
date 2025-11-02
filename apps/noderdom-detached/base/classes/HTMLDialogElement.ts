import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDialogElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDialogElement } = StateMachine<
  IHTMLDialogElement,
  IHTMLDialogElementProperties,
  IHTMLDialogElementReadonlyProperties
>('HTMLDialogElement');
export const internalHandler = new InternalHandler<IHTMLDialogElement>('HTMLDialogElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDialogElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDialogElement extends HTMLElement implements IHTMLDialogElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDialogElement>(HTMLDialogElement, this, internalHandler, HTMLDialogElementConstantKeys, HTMLDialogElementPropertyKeys);
    }

    // properties

    public get open(): boolean {
      return internalHandler.get<boolean>(this, 'open', false);
    }

    public set open(value: boolean) {
      internalHandler.set<boolean>(this, 'open', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDialogElementProperties extends IHTMLElementProperties {
  open?: boolean;
}

export interface IHTMLDialogElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDialogElementPropertyKeys = [...HTMLElementPropertyKeys, 'open'];

// tslint:disable-next-line:variable-name
export const HTMLDialogElementConstantKeys = [...HTMLElementConstantKeys];

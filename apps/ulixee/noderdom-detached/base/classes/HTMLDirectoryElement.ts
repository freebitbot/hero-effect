import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDirectoryElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDirectoryElement } = StateMachine<
  IHTMLDirectoryElement,
  IHTMLDirectoryElementProperties,
  IHTMLDirectoryElementReadonlyProperties
>('HTMLDirectoryElement');
export const internalHandler = new InternalHandler<IHTMLDirectoryElement>('HTMLDirectoryElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDirectoryElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDirectoryElement extends HTMLElement implements IHTMLDirectoryElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDirectoryElement>(HTMLDirectoryElement, this, internalHandler, HTMLDirectoryElementConstantKeys, HTMLDirectoryElementPropertyKeys);
    }

    // properties

    public get compact(): boolean {
      return internalHandler.get<boolean>(this, 'compact', false);
    }

    public set compact(value: boolean) {
      internalHandler.set<boolean>(this, 'compact', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDirectoryElementProperties extends IHTMLElementProperties {
  compact?: boolean;
}

export interface IHTMLDirectoryElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDirectoryElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact'];

// tslint:disable-next-line:variable-name
export const HTMLDirectoryElementConstantKeys = [...HTMLElementConstantKeys];

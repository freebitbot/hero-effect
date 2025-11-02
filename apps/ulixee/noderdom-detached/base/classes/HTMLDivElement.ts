import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDivElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDivElement } = StateMachine<
  IHTMLDivElement,
  IHTMLDivElementProperties,
  IHTMLDivElementReadonlyProperties
>('HTMLDivElement');
export const internalHandler = new InternalHandler<IHTMLDivElement>('HTMLDivElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDivElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDivElement extends HTMLElement implements IHTMLDivElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDivElement>(HTMLDivElement, this, internalHandler, HTMLDivElementConstantKeys, HTMLDivElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDivElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLDivElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDivElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

// tslint:disable-next-line:variable-name
export const HTMLDivElementConstantKeys = [...HTMLElementConstantKeys];

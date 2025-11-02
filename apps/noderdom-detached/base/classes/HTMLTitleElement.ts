import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTitleElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTitleElement } = StateMachine<
  IHTMLTitleElement,
  IHTMLTitleElementProperties,
  IHTMLTitleElementReadonlyProperties
>('HTMLTitleElement');
export const internalHandler = new InternalHandler<IHTMLTitleElement>('HTMLTitleElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTitleElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTitleElement extends HTMLElement implements IHTMLTitleElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTitleElement>(HTMLTitleElement, this, internalHandler, HTMLTitleElementConstantKeys, HTMLTitleElementPropertyKeys);
    }

    // properties

    public get text(): string {
      return internalHandler.get<string>(this, 'text', false);
    }

    public set text(value: string) {
      internalHandler.set<string>(this, 'text', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTitleElementProperties extends IHTMLElementProperties {
  text?: string;
}

export interface IHTMLTitleElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLTitleElementPropertyKeys = [...HTMLElementPropertyKeys, 'text'];

// tslint:disable-next-line:variable-name
export const HTMLTitleElementConstantKeys = [...HTMLElementConstantKeys];

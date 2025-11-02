import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLParagraphElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLParagraphElement } = StateMachine<
  IHTMLParagraphElement,
  IHTMLParagraphElementProperties,
  IHTMLParagraphElementReadonlyProperties
>('HTMLParagraphElement');
export const internalHandler = new InternalHandler<IHTMLParagraphElement>('HTMLParagraphElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLParagraphElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParagraphElement extends HTMLElement implements IHTMLParagraphElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLParagraphElement>(HTMLParagraphElement, this, internalHandler, HTMLParagraphElementConstantKeys, HTMLParagraphElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLParagraphElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLParagraphElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLParagraphElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

// tslint:disable-next-line:variable-name
export const HTMLParagraphElementConstantKeys = [...HTMLElementConstantKeys];

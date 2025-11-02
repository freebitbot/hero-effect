import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHeadingElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHeadingElement } = StateMachine<
  IHTMLHeadingElement,
  IHTMLHeadingElementProperties,
  IHTMLHeadingElementReadonlyProperties
>('HTMLHeadingElement');
export const internalHandler = new InternalHandler<IHTMLHeadingElement>('HTMLHeadingElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLHeadingElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadingElement extends HTMLElement implements IHTMLHeadingElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLHeadingElement>(HTMLHeadingElement, this, internalHandler, HTMLHeadingElementConstantKeys, HTMLHeadingElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLHeadingElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLHeadingElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLHeadingElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

// tslint:disable-next-line:variable-name
export const HTMLHeadingElementConstantKeys = [...HTMLElementConstantKeys];

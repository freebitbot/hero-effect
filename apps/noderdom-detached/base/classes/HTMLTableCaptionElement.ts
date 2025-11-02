import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCaptionElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTableCaptionElement } = StateMachine<
  IHTMLTableCaptionElement,
  IHTMLTableCaptionElementProperties,
  IHTMLTableCaptionElementReadonlyProperties
>('HTMLTableCaptionElement');
export const internalHandler = new InternalHandler<IHTMLTableCaptionElement>('HTMLTableCaptionElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTableCaptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCaptionElement extends HTMLElement implements IHTMLTableCaptionElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTableCaptionElement>(HTMLTableCaptionElement, this, internalHandler, HTMLTableCaptionElementConstantKeys, HTMLTableCaptionElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTableCaptionElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLTableCaptionElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLTableCaptionElementPropertyKeys = [...HTMLElementPropertyKeys, 'align'];

// tslint:disable-next-line:variable-name
export const HTMLTableCaptionElementConstantKeys = [...HTMLElementConstantKeys];

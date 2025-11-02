import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLEmbedElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLEmbedElement } = StateMachine<
  IHTMLEmbedElement,
  IHTMLEmbedElementProperties,
  IHTMLEmbedElementReadonlyProperties
>('HTMLEmbedElement');
export const internalHandler = new InternalHandler<IHTMLEmbedElement>('HTMLEmbedElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLEmbedElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLEmbedElement extends HTMLElement implements IHTMLEmbedElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLEmbedElement>(HTMLEmbedElement, this, internalHandler, HTMLEmbedElementConstantKeys, HTMLEmbedElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get height(): string {
      return internalHandler.get<string>(this, 'height', false);
    }

    public set height(value: string) {
      internalHandler.set<string>(this, 'height', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLEmbedElementProperties extends IHTMLElementProperties {
  align?: string;
  height?: string;
  name?: string;
  src?: string;
  type?: string;
  width?: string;
}

export interface IHTMLEmbedElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLEmbedElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'height', 'name', 'src', 'type', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLEmbedElementConstantKeys = [...HTMLElementConstantKeys];

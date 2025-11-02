import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IHTMLHyperlinkElementUtils, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAnchorElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, IHTMLHyperlinkElementUtilsReadonlyProperties, HTMLHyperlinkElementUtilsPropertyKeys, HTMLHyperlinkElementUtilsConstantKeys } from '../mixins/HTMLHyperlinkElementUtils';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLAnchorElement } = StateMachine<
  IHTMLAnchorElement,
  IHTMLAnchorElementProperties,
  IHTMLAnchorElementReadonlyProperties
>('HTMLAnchorElement');
export const internalHandler = new InternalHandler<IHTMLAnchorElement>('HTMLAnchorElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLAnchorElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAnchorElement extends Parent implements IHTMLAnchorElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLAnchorElement>(HTMLAnchorElement, this, internalHandler, HTMLAnchorElementConstantKeys, HTMLAnchorElementPropertyKeys);
    }

    // properties

    public get charset(): string {
      return internalHandler.get<string>(this, 'charset', false);
    }

    public set charset(value: string) {
      internalHandler.set<string>(this, 'charset', value);
    }

    public get coords(): string {
      return internalHandler.get<string>(this, 'coords', false);
    }

    public set coords(value: string) {
      internalHandler.set<string>(this, 'coords', value);
    }

    public get download(): string {
      return internalHandler.get<string>(this, 'download', false);
    }

    public set download(value: string) {
      internalHandler.set<string>(this, 'download', value);
    }

    public get hreflang(): string {
      return internalHandler.get<string>(this, 'hreflang', false);
    }

    public set hreflang(value: string) {
      internalHandler.set<string>(this, 'hreflang', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get rel(): string {
      return internalHandler.get<string>(this, 'rel', false);
    }

    public set rel(value: string) {
      internalHandler.set<string>(this, 'rel', value);
    }

    public get relList(): IDOMTokenList {
      return internalHandler.get<IDOMTokenList>(this, 'relList', false);
    }

    public get rev(): string {
      return internalHandler.get<string>(this, 'rev', false);
    }

    public set rev(value: string) {
      internalHandler.set<string>(this, 'rev', value);
    }

    public get shape(): string {
      return internalHandler.get<string>(this, 'shape', false);
    }

    public set shape(value: string) {
      internalHandler.set<string>(this, 'shape', value);
    }

    public get target(): string {
      return internalHandler.get<string>(this, 'target', false);
    }

    public set target(value: string) {
      internalHandler.set<string>(this, 'target', value);
    }

    public get text(): string {
      return internalHandler.get<string>(this, 'text', false);
    }

    public set text(value: string) {
      internalHandler.set<string>(this, 'text', value);
    }

    public get type(): string {
      return internalHandler.get<string>(this, 'type', false);
    }

    public set type(value: string) {
      internalHandler.set<string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLAnchorElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  charset?: string;
  coords?: string;
  download?: string;
  hreflang?: string;
  name?: string;
  rel?: string;
  relList?: IDOMTokenList;
  rev?: string;
  shape?: string;
  target?: string;
  text?: string;
  type?: string;
}

export interface IHTMLAnchorElementReadonlyProperties extends IHTMLElementReadonlyProperties, IHTMLHyperlinkElementUtilsReadonlyProperties {
  relList?: IDOMTokenList;
}

// tslint:disable-next-line:variable-name
export const HTMLAnchorElementPropertyKeys = [...HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, 'charset', 'coords', 'download', 'hreflang', 'name', 'rel', 'relList', 'rev', 'shape', 'target', 'text', 'type'];

// tslint:disable-next-line:variable-name
export const HTMLAnchorElementConstantKeys = [...HTMLElementConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys];

import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IHTMLHyperlinkElementUtils, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAreaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, IHTMLHyperlinkElementUtilsReadonlyProperties, HTMLHyperlinkElementUtilsPropertyKeys, HTMLHyperlinkElementUtilsConstantKeys } from '../mixins/HTMLHyperlinkElementUtils';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLAreaElement } = StateMachine<
  IHTMLAreaElement,
  IHTMLAreaElementProperties,
  IHTMLAreaElementReadonlyProperties
>('HTMLAreaElement');
export const internalHandler = new InternalHandler<IHTMLAreaElement>('HTMLAreaElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAreaElement extends Parent implements IHTMLAreaElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLAreaElement>(HTMLAreaElement, this, internalHandler, HTMLAreaElementConstantKeys, HTMLAreaElementPropertyKeys);
    }

    // properties

    public get alt(): string {
      return internalHandler.get<string>(this, 'alt', false);
    }

    public set alt(value: string) {
      internalHandler.set<string>(this, 'alt', value);
    }

    public get coords(): string {
      return internalHandler.get<string>(this, 'coords', false);
    }

    public set coords(value: string) {
      internalHandler.set<string>(this, 'coords', value);
    }

    public get noHref(): boolean {
      return internalHandler.get<boolean>(this, 'noHref', false);
    }

    public set noHref(value: boolean) {
      internalHandler.set<boolean>(this, 'noHref', value);
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLAreaElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  alt?: string;
  coords?: string;
  noHref?: boolean;
  rel?: string;
  relList?: IDOMTokenList;
  shape?: string;
  target?: string;
}

export interface IHTMLAreaElementReadonlyProperties extends IHTMLElementReadonlyProperties, IHTMLHyperlinkElementUtilsReadonlyProperties {
  relList?: IDOMTokenList;
}

// tslint:disable-next-line:variable-name
export const HTMLAreaElementPropertyKeys = [...HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, 'alt', 'coords', 'noHref', 'rel', 'relList', 'shape', 'target'];

// tslint:disable-next-line:variable-name
export const HTMLAreaElementConstantKeys = [...HTMLElementConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys];

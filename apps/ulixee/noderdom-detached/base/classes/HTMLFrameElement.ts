import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocument, IWindowProxy, IHTMLFrameElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLFrameElement } = StateMachine<
  IHTMLFrameElement,
  IHTMLFrameElementProperties,
  IHTMLFrameElementReadonlyProperties
>('HTMLFrameElement');
export const internalHandler = new InternalHandler<IHTMLFrameElement>('HTMLFrameElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFrameElement extends HTMLElement implements IHTMLFrameElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLFrameElement>(HTMLFrameElement, this, internalHandler, HTMLFrameElementConstantKeys, HTMLFrameElementPropertyKeys);
    }

    // properties

    public get contentDocument(): IDocument | null {
      return internalHandler.get<IDocument | null>(this, 'contentDocument', true);
    }

    public get contentWindow(): IWindowProxy | null {
      return internalHandler.get<IWindowProxy | null>(this, 'contentWindow', true);
    }

    public get frameBorder(): string {
      return internalHandler.get<string>(this, 'frameBorder', false);
    }

    public set frameBorder(value: string) {
      internalHandler.set<string>(this, 'frameBorder', value);
    }

    public get longDesc(): string {
      return internalHandler.get<string>(this, 'longDesc', false);
    }

    public set longDesc(value: string) {
      internalHandler.set<string>(this, 'longDesc', value);
    }

    public get marginHeight(): string {
      return internalHandler.get<string>(this, 'marginHeight', false);
    }

    public set marginHeight(value: string) {
      internalHandler.set<string>(this, 'marginHeight', value);
    }

    public get marginWidth(): string {
      return internalHandler.get<string>(this, 'marginWidth', false);
    }

    public set marginWidth(value: string) {
      internalHandler.set<string>(this, 'marginWidth', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get noResize(): boolean {
      return internalHandler.get<boolean>(this, 'noResize', false);
    }

    public set noResize(value: boolean) {
      internalHandler.set<boolean>(this, 'noResize', value);
    }

    public get scrolling(): string {
      return internalHandler.get<string>(this, 'scrolling', false);
    }

    public set scrolling(value: string) {
      internalHandler.set<string>(this, 'scrolling', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLFrameElementProperties extends IHTMLElementProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
  frameBorder?: string;
  longDesc?: string;
  marginHeight?: string;
  marginWidth?: string;
  name?: string;
  noResize?: boolean;
  scrolling?: string;
  src?: string;
}

export interface IHTMLFrameElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
}

// tslint:disable-next-line:variable-name
export const HTMLFrameElementPropertyKeys = [...HTMLElementPropertyKeys, 'contentDocument', 'contentWindow', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];

// tslint:disable-next-line:variable-name
export const HTMLFrameElementConstantKeys = [...HTMLElementConstantKeys];

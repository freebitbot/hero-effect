import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocument, IWindowProxy, IHTMLIFrameElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLIFrameElement } = StateMachine<
  IHTMLIFrameElement,
  IHTMLIFrameElementProperties,
  IHTMLIFrameElementReadonlyProperties
>('HTMLIFrameElement');
export const internalHandler = new InternalHandler<IHTMLIFrameElement>('HTMLIFrameElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLIFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLIFrameElement extends HTMLElement implements IHTMLIFrameElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLIFrameElement>(HTMLIFrameElement, this, internalHandler, HTMLIFrameElementConstantKeys, HTMLIFrameElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get allowFullscreen(): boolean {
      return internalHandler.get<boolean>(this, 'allowFullscreen', false);
    }

    public set allowFullscreen(value: boolean) {
      internalHandler.set<boolean>(this, 'allowFullscreen', value);
    }

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

    public get height(): string {
      return internalHandler.get<string>(this, 'height', false);
    }

    public set height(value: string) {
      internalHandler.set<string>(this, 'height', value);
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

    public get srcdoc(): string {
      return internalHandler.get<string>(this, 'srcdoc', false);
    }

    public set srcdoc(value: string) {
      internalHandler.set<string>(this, 'srcdoc', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    // methods

    public getSVGDocument(): IDocument | null {
      return internalHandler.run<IDocument | null>(this, 'getSVGDocument', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLIFrameElementProperties extends IHTMLElementProperties {
  align?: string;
  allowFullscreen?: boolean;
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
  frameBorder?: string;
  height?: string;
  longDesc?: string;
  marginHeight?: string;
  marginWidth?: string;
  name?: string;
  scrolling?: string;
  src?: string;
  srcdoc?: string;
  width?: string;
}

export interface IHTMLIFrameElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
}

// tslint:disable-next-line:variable-name
export const HTMLIFrameElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'allowFullscreen', 'contentDocument', 'contentWindow', 'frameBorder', 'height', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'scrolling', 'src', 'srcdoc', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLIFrameElementConstantKeys = [...HTMLElementConstantKeys];

import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, IElementCSSInlineStyle, IElementContentEditable, IGlobalEventHandlers, IHTMLOrSVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLElement } from '../interfaces';
import { IElementProperties, IElementReadonlyProperties, ElementPropertyKeys, ElementConstantKeys } from './Element';
import { IElementCSSInlineStyleProperties, IElementCSSInlineStyleReadonlyProperties, ElementCSSInlineStylePropertyKeys, ElementCSSInlineStyleConstantKeys } from '../mixins/ElementCSSInlineStyle';
import { IElementContentEditableProperties, IElementContentEditableReadonlyProperties, ElementContentEditablePropertyKeys, ElementContentEditableConstantKeys } from '../mixins/ElementContentEditable';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties, GlobalEventHandlersPropertyKeys, GlobalEventHandlersConstantKeys } from '../mixins/GlobalEventHandlers';
import { IHTMLOrSVGElementProperties, IHTMLOrSVGElementReadonlyProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../mixins/HTMLOrSVGElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLElement } = StateMachine<
  IHTMLElement,
  IHTMLElementProperties,
  IHTMLElementReadonlyProperties
>('HTMLElement');
export const internalHandler = new InternalHandler<IHTMLElement>('HTMLElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLElementGenerator(Element: Constructable<IElement>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Element, [ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement]) as unknown) as Constructable<IElement & IElementCSSInlineStyle & IElementContentEditable & IGlobalEventHandlers & IHTMLOrSVGElement>;

  return class HTMLElement extends Parent implements IHTMLElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLElement>(HTMLElement, this, internalHandler, HTMLElementConstantKeys, HTMLElementPropertyKeys);
    }

    // properties

    public get accessKey(): string {
      return internalHandler.get<string>(this, 'accessKey', false);
    }

    public set accessKey(value: string) {
      internalHandler.set<string>(this, 'accessKey', value);
    }

    public get dir(): string {
      return internalHandler.get<string>(this, 'dir', false);
    }

    public set dir(value: string) {
      internalHandler.set<string>(this, 'dir', value);
    }

    public get draggable(): boolean {
      return internalHandler.get<boolean>(this, 'draggable', false);
    }

    public set draggable(value: boolean) {
      internalHandler.set<boolean>(this, 'draggable', value);
    }

    public get hidden(): boolean {
      return internalHandler.get<boolean>(this, 'hidden', false);
    }

    public set hidden(value: boolean) {
      internalHandler.set<boolean>(this, 'hidden', value);
    }

    public get lang(): string {
      return internalHandler.get<string>(this, 'lang', false);
    }

    public set lang(value: string) {
      internalHandler.set<string>(this, 'lang', value);
    }

    public get offsetHeight(): number {
      return internalHandler.get<number>(this, 'offsetHeight', false);
    }

    public get offsetLeft(): number {
      return internalHandler.get<number>(this, 'offsetLeft', false);
    }

    public get offsetParent(): IElement | null {
      return internalHandler.get<IElement | null>(this, 'offsetParent', true);
    }

    public get offsetTop(): number {
      return internalHandler.get<number>(this, 'offsetTop', false);
    }

    public get offsetWidth(): number {
      return internalHandler.get<number>(this, 'offsetWidth', false);
    }

    public get title(): string {
      return internalHandler.get<string>(this, 'title', false);
    }

    public set title(value: string) {
      internalHandler.set<string>(this, 'title', value);
    }

    public get translate(): boolean {
      return internalHandler.get<boolean>(this, 'translate', false);
    }

    public set translate(value: boolean) {
      internalHandler.set<boolean>(this, 'translate', value);
    }

    // methods

    public click(): void {
      internalHandler.run<void>(this, 'click', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLElementProperties extends IElementProperties, IElementCSSInlineStyleProperties, IElementContentEditableProperties, IGlobalEventHandlersProperties, IHTMLOrSVGElementProperties {
  accessKey?: string;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  lang?: string;
  offsetHeight?: number;
  offsetLeft?: number;
  offsetParent?: IElement | null;
  offsetTop?: number;
  offsetWidth?: number;
  title?: string;
  translate?: boolean;
}

export interface IHTMLElementReadonlyProperties extends IElementReadonlyProperties, IElementCSSInlineStyleReadonlyProperties, IElementContentEditableReadonlyProperties, IGlobalEventHandlersReadonlyProperties, IHTMLOrSVGElementReadonlyProperties {
  offsetHeight?: number;
  offsetLeft?: number;
  offsetParent?: IElement | null;
  offsetTop?: number;
  offsetWidth?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLElementPropertyKeys = [...ElementPropertyKeys, ...ElementCSSInlineStylePropertyKeys, ...ElementContentEditablePropertyKeys, ...GlobalEventHandlersPropertyKeys, ...HTMLOrSVGElementPropertyKeys, 'accessKey', 'dir', 'draggable', 'hidden', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'title', 'translate'];

// tslint:disable-next-line:variable-name
export const HTMLElementConstantKeys = [...ElementConstantKeys, ...ElementCSSInlineStyleConstantKeys, ...ElementContentEditableConstantKeys, ...GlobalEventHandlersConstantKeys, ...HTMLOrSVGElementConstantKeys];

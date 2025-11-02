import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLMarqueeElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMarqueeElement } = StateMachine<
  IHTMLMarqueeElement,
  IHTMLMarqueeElementProperties,
  IHTMLMarqueeElementReadonlyProperties
>('HTMLMarqueeElement');
export const internalHandler = new InternalHandler<IHTMLMarqueeElement>('HTMLMarqueeElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMarqueeElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMarqueeElement extends HTMLElement implements IHTMLMarqueeElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMarqueeElement>(HTMLMarqueeElement, this, internalHandler, HTMLMarqueeElementConstantKeys, HTMLMarqueeElementPropertyKeys);
    }

    // properties

    public get behavior(): string {
      return internalHandler.get<string>(this, 'behavior', false);
    }

    public set behavior(value: string) {
      internalHandler.set<string>(this, 'behavior', value);
    }

    public get bgColor(): string {
      return internalHandler.get<string>(this, 'bgColor', false);
    }

    public set bgColor(value: string) {
      internalHandler.set<string>(this, 'bgColor', value);
    }

    public get direction(): string {
      return internalHandler.get<string>(this, 'direction', false);
    }

    public set direction(value: string) {
      internalHandler.set<string>(this, 'direction', value);
    }

    public get height(): string {
      return internalHandler.get<string>(this, 'height', false);
    }

    public set height(value: string) {
      internalHandler.set<string>(this, 'height', value);
    }

    public get hspace(): number {
      return internalHandler.get<number>(this, 'hspace', false);
    }

    public set hspace(value: number) {
      internalHandler.set<number>(this, 'hspace', value);
    }

    public get scrollAmount(): number {
      return internalHandler.get<number>(this, 'scrollAmount', false);
    }

    public set scrollAmount(value: number) {
      internalHandler.set<number>(this, 'scrollAmount', value);
    }

    public get scrollDelay(): number {
      return internalHandler.get<number>(this, 'scrollDelay', false);
    }

    public set scrollDelay(value: number) {
      internalHandler.set<number>(this, 'scrollDelay', value);
    }

    public get trueSpeed(): boolean {
      return internalHandler.get<boolean>(this, 'trueSpeed', false);
    }

    public set trueSpeed(value: boolean) {
      internalHandler.set<boolean>(this, 'trueSpeed', value);
    }

    public get vspace(): number {
      return internalHandler.get<number>(this, 'vspace', false);
    }

    public set vspace(value: number) {
      internalHandler.set<number>(this, 'vspace', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMarqueeElementProperties extends IHTMLElementProperties {
  behavior?: string;
  bgColor?: string;
  direction?: string;
  height?: string;
  hspace?: number;
  scrollAmount?: number;
  scrollDelay?: number;
  trueSpeed?: boolean;
  vspace?: number;
  width?: string;
}

export interface IHTMLMarqueeElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLMarqueeElementPropertyKeys = [...HTMLElementPropertyKeys, 'behavior', 'bgColor', 'direction', 'height', 'hspace', 'scrollAmount', 'scrollDelay', 'trueSpeed', 'vspace', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLMarqueeElementConstantKeys = [...HTMLElementConstantKeys];

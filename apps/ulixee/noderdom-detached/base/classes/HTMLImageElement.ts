import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLImageElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLImageElement } = StateMachine<
  IHTMLImageElement,
  IHTMLImageElementProperties,
  IHTMLImageElementReadonlyProperties
>('HTMLImageElement');
export const internalHandler = new InternalHandler<IHTMLImageElement>('HTMLImageElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLImageElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLImageElement extends HTMLElement implements IHTMLImageElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLImageElement>(HTMLImageElement, this, internalHandler, HTMLImageElementConstantKeys, HTMLImageElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get alt(): string {
      return internalHandler.get<string>(this, 'alt', false);
    }

    public set alt(value: string) {
      internalHandler.set<string>(this, 'alt', value);
    }

    public get border(): string {
      return internalHandler.get<string>(this, 'border', false);
    }

    public set border(value: string) {
      internalHandler.set<string>(this, 'border', value);
    }

    public get complete(): boolean {
      return internalHandler.get<boolean>(this, 'complete', false);
    }

    public get crossOrigin(): string | null {
      return internalHandler.get<string | null>(this, 'crossOrigin', true);
    }

    public set crossOrigin(value: string | null) {
      internalHandler.set<string | null>(this, 'crossOrigin', value);
    }

    public get currentSrc(): string {
      return internalHandler.get<string>(this, 'currentSrc', false);
    }

    public get height(): number {
      return internalHandler.get<number>(this, 'height', false);
    }

    public set height(value: number) {
      internalHandler.set<number>(this, 'height', value);
    }

    public get hspace(): number {
      return internalHandler.get<number>(this, 'hspace', false);
    }

    public set hspace(value: number) {
      internalHandler.set<number>(this, 'hspace', value);
    }

    public get isMap(): boolean {
      return internalHandler.get<boolean>(this, 'isMap', false);
    }

    public set isMap(value: boolean) {
      internalHandler.set<boolean>(this, 'isMap', value);
    }

    public get longDesc(): string {
      return internalHandler.get<string>(this, 'longDesc', false);
    }

    public set longDesc(value: string) {
      internalHandler.set<string>(this, 'longDesc', value);
    }

    public get lowsrc(): string {
      return internalHandler.get<string>(this, 'lowsrc', false);
    }

    public set lowsrc(value: string) {
      internalHandler.set<string>(this, 'lowsrc', value);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    public get naturalHeight(): number {
      return internalHandler.get<number>(this, 'naturalHeight', false);
    }

    public get naturalWidth(): number {
      return internalHandler.get<number>(this, 'naturalWidth', false);
    }

    public get sizes(): string {
      return internalHandler.get<string>(this, 'sizes', false);
    }

    public set sizes(value: string) {
      internalHandler.set<string>(this, 'sizes', value);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get srcset(): string {
      return internalHandler.get<string>(this, 'srcset', false);
    }

    public set srcset(value: string) {
      internalHandler.set<string>(this, 'srcset', value);
    }

    public get useMap(): string {
      return internalHandler.get<string>(this, 'useMap', false);
    }

    public set useMap(value: string) {
      internalHandler.set<string>(this, 'useMap', value);
    }

    public get vspace(): number {
      return internalHandler.get<number>(this, 'vspace', false);
    }

    public set vspace(value: number) {
      internalHandler.set<number>(this, 'vspace', value);
    }

    public get width(): number {
      return internalHandler.get<number>(this, 'width', false);
    }

    public set width(value: number) {
      internalHandler.set<number>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLImageElementProperties extends IHTMLElementProperties {
  align?: string;
  alt?: string;
  border?: string;
  complete?: boolean;
  crossOrigin?: string | null;
  currentSrc?: string;
  height?: number;
  hspace?: number;
  isMap?: boolean;
  longDesc?: string;
  lowsrc?: string;
  name?: string;
  naturalHeight?: number;
  naturalWidth?: number;
  sizes?: string;
  src?: string;
  srcset?: string;
  useMap?: string;
  vspace?: number;
  width?: number;
}

export interface IHTMLImageElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  complete?: boolean;
  currentSrc?: string;
  naturalHeight?: number;
  naturalWidth?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLImageElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'alt', 'border', 'complete', 'crossOrigin', 'currentSrc', 'height', 'hspace', 'isMap', 'longDesc', 'lowsrc', 'name', 'naturalHeight', 'naturalWidth', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLImageElementConstantKeys = [...HTMLElementConstantKeys];

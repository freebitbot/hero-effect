import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLMediaElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLVideoElement } from '../interfaces';
import { IHTMLMediaElementProperties, IHTMLMediaElementReadonlyProperties, HTMLMediaElementPropertyKeys, HTMLMediaElementConstantKeys } from './HTMLMediaElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLVideoElement } = StateMachine<
  IHTMLVideoElement,
  IHTMLVideoElementProperties,
  IHTMLVideoElementReadonlyProperties
>('HTMLVideoElement');
export const internalHandler = new InternalHandler<IHTMLVideoElement>('HTMLVideoElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLVideoElementGenerator(HTMLMediaElement: Constructable<IHTMLMediaElement>) {
  return class HTMLVideoElement extends HTMLMediaElement implements IHTMLVideoElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLVideoElement>(HTMLVideoElement, this, internalHandler, HTMLVideoElementConstantKeys, HTMLVideoElementPropertyKeys);
    }

    // properties

    public get height(): number {
      return internalHandler.get<number>(this, 'height', false);
    }

    public set height(value: number) {
      internalHandler.set<number>(this, 'height', value);
    }

    public get playsInline(): boolean {
      return internalHandler.get<boolean>(this, 'playsInline', false);
    }

    public set playsInline(value: boolean) {
      internalHandler.set<boolean>(this, 'playsInline', value);
    }

    public get poster(): string {
      return internalHandler.get<string>(this, 'poster', false);
    }

    public set poster(value: string) {
      internalHandler.set<string>(this, 'poster', value);
    }

    public get videoHeight(): number {
      return internalHandler.get<number>(this, 'videoHeight', false);
    }

    public get videoWidth(): number {
      return internalHandler.get<number>(this, 'videoWidth', false);
    }

    public get width(): number {
      return internalHandler.get<number>(this, 'width', false);
    }

    public set width(value: number) {
      internalHandler.set<number>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLVideoElementProperties extends IHTMLMediaElementProperties {
  height?: number;
  playsInline?: boolean;
  poster?: string;
  videoHeight?: number;
  videoWidth?: number;
  width?: number;
}

export interface IHTMLVideoElementReadonlyProperties extends IHTMLMediaElementReadonlyProperties {
  videoHeight?: number;
  videoWidth?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLVideoElementPropertyKeys = [...HTMLMediaElementPropertyKeys, 'height', 'playsInline', 'poster', 'videoHeight', 'videoWidth', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLVideoElementConstantKeys = [...HTMLMediaElementConstantKeys];

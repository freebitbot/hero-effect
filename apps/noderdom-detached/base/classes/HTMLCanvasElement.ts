import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IRenderingContext, IBlobCallback, IHTMLCanvasElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLCanvasElement } = StateMachine<
  IHTMLCanvasElement,
  IHTMLCanvasElementProperties,
  IHTMLCanvasElementReadonlyProperties
>('HTMLCanvasElement');
export const internalHandler = new InternalHandler<IHTMLCanvasElement>('HTMLCanvasElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLCanvasElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLCanvasElement extends HTMLElement implements IHTMLCanvasElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLCanvasElement>(HTMLCanvasElement, this, internalHandler, HTMLCanvasElementConstantKeys, HTMLCanvasElementPropertyKeys);
    }

    // properties

    public get height(): number {
      return internalHandler.get<number>(this, 'height', false);
    }

    public set height(value: number) {
      internalHandler.set<number>(this, 'height', value);
    }

    public get width(): number {
      return internalHandler.get<number>(this, 'width', false);
    }

    public set width(value: number) {
      internalHandler.set<number>(this, 'width', value);
    }

    // methods

    public getContext(contextId: string, ...args: any[]): IRenderingContext | null {
      return internalHandler.run<IRenderingContext | null>(this, 'getContext', [contextId, args]);
    }

    public toBlob(callback: IBlobCallback, type?: string, quality?: any): void {
      internalHandler.run<void>(this, 'toBlob', [callback, type, quality]);
    }

    public toDataURL(type?: string, quality?: any): string {
      return internalHandler.run<string>(this, 'toDataURL', [type, quality]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLCanvasElementProperties extends IHTMLElementProperties {
  height?: number;
  width?: number;
}

export interface IHTMLCanvasElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLCanvasElementPropertyKeys = [...HTMLElementPropertyKeys, 'height', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLCanvasElementConstantKeys = [...HTMLElementConstantKeys];

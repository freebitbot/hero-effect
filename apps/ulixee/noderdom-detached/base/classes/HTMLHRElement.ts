import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHRElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHRElement } = StateMachine<
  IHTMLHRElement,
  IHTMLHRElementProperties,
  IHTMLHRElementReadonlyProperties
>('HTMLHRElement');
export const internalHandler = new InternalHandler<IHTMLHRElement>('HTMLHRElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLHRElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHRElement extends HTMLElement implements IHTMLHRElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLHRElement>(HTMLHRElement, this, internalHandler, HTMLHRElementConstantKeys, HTMLHRElementPropertyKeys);
    }

    // properties

    public get align(): string {
      return internalHandler.get<string>(this, 'align', false);
    }

    public set align(value: string) {
      internalHandler.set<string>(this, 'align', value);
    }

    public get color(): string {
      return internalHandler.get<string>(this, 'color', false);
    }

    public set color(value: string) {
      internalHandler.set<string>(this, 'color', value);
    }

    public get noShade(): boolean {
      return internalHandler.get<boolean>(this, 'noShade', false);
    }

    public set noShade(value: boolean) {
      internalHandler.set<boolean>(this, 'noShade', value);
    }

    public get size(): string {
      return internalHandler.get<string>(this, 'size', false);
    }

    public set size(value: string) {
      internalHandler.set<string>(this, 'size', value);
    }

    public get width(): string {
      return internalHandler.get<string>(this, 'width', false);
    }

    public set width(value: string) {
      internalHandler.set<string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLHRElementProperties extends IHTMLElementProperties {
  align?: string;
  color?: string;
  noShade?: boolean;
  size?: string;
  width?: string;
}

export interface IHTMLHRElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLHRElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'color', 'noShade', 'size', 'width'];

// tslint:disable-next-line:variable-name
export const HTMLHRElementConstantKeys = [...HTMLElementConstantKeys];

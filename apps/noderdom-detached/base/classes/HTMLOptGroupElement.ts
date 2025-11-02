import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOptGroupElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLOptGroupElement } = StateMachine<
  IHTMLOptGroupElement,
  IHTMLOptGroupElementProperties,
  IHTMLOptGroupElementReadonlyProperties
>('HTMLOptGroupElement');
export const internalHandler = new InternalHandler<IHTMLOptGroupElement>('HTMLOptGroupElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLOptGroupElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptGroupElement extends HTMLElement implements IHTMLOptGroupElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLOptGroupElement>(HTMLOptGroupElement, this, internalHandler, HTMLOptGroupElementConstantKeys, HTMLOptGroupElementPropertyKeys);
    }

    // properties

    public get disabled(): boolean {
      return internalHandler.get<boolean>(this, 'disabled', false);
    }

    public set disabled(value: boolean) {
      internalHandler.set<boolean>(this, 'disabled', value);
    }

    public get label(): string {
      return internalHandler.get<string>(this, 'label', false);
    }

    public set label(value: string) {
      internalHandler.set<string>(this, 'label', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOptGroupElementProperties extends IHTMLElementProperties {
  disabled?: boolean;
  label?: string;
}

export interface IHTMLOptGroupElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLOptGroupElementPropertyKeys = [...HTMLElementPropertyKeys, 'disabled', 'label'];

// tslint:disable-next-line:variable-name
export const HTMLOptGroupElementConstantKeys = [...HTMLElementConstantKeys];

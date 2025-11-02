import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocumentFragment, IHTMLTemplateElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTemplateElement } = StateMachine<
  IHTMLTemplateElement,
  IHTMLTemplateElementProperties,
  IHTMLTemplateElementReadonlyProperties
>('HTMLTemplateElement');
export const internalHandler = new InternalHandler<IHTMLTemplateElement>('HTMLTemplateElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTemplateElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTemplateElement extends HTMLElement implements IHTMLTemplateElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTemplateElement>(HTMLTemplateElement, this, internalHandler, HTMLTemplateElementConstantKeys, HTMLTemplateElementPropertyKeys);
    }

    // properties

    public get content(): IDocumentFragment {
      return internalHandler.get<IDocumentFragment>(this, 'content', false);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTemplateElementProperties extends IHTMLElementProperties {
  content?: IDocumentFragment;
}

export interface IHTMLTemplateElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  content?: IDocumentFragment;
}

// tslint:disable-next-line:variable-name
export const HTMLTemplateElementPropertyKeys = [...HTMLElementPropertyKeys, 'content'];

// tslint:disable-next-line:variable-name
export const HTMLTemplateElementConstantKeys = [...HTMLElementConstantKeys];

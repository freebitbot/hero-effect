import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDocument, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDocument } from '../interfaces';
import { IDocumentProperties, IDocumentReadonlyProperties, DocumentPropertyKeys, DocumentConstantKeys } from './Document';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLDocument } = StateMachine<
  IHTMLDocument,
  IHTMLDocumentProperties,
  IHTMLDocumentReadonlyProperties
>('HTMLDocument');
export const internalHandler = new InternalHandler<IHTMLDocument>('HTMLDocument', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLDocumentGenerator(Document: Constructable<IDocument>) {
  return class HTMLDocument extends Document implements IHTMLDocument {constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLDocument>(HTMLDocument, this, internalHandler, HTMLDocumentConstantKeys, HTMLDocumentPropertyKeys);
    }

    public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IHTMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLDocumentProperties extends IDocumentProperties {}

export interface IHTMLDocumentReadonlyProperties extends IDocumentReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLDocumentPropertyKeys = [...DocumentPropertyKeys];

// tslint:disable-next-line:variable-name
export const HTMLDocumentConstantKeys = [...DocumentConstantKeys];

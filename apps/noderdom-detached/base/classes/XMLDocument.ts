import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDocument, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IXMLDocument } from '../interfaces';
import { IDocumentProperties, IDocumentReadonlyProperties, DocumentPropertyKeys, DocumentConstantKeys } from './Document';

export const { getState, setState, setHiddenState, setReadonlyOfXMLDocument } = StateMachine<
  IXMLDocument,
  IXMLDocumentProperties,
  IXMLDocumentReadonlyProperties
>('XMLDocument');
export const internalHandler = new InternalHandler<IXMLDocument>('XMLDocument', getState, setState);

// tslint:disable-next-line:variable-name
export function XMLDocumentGenerator(Document: Constructable<IDocument>) {
  return class XMLDocument extends Document implements IXMLDocument {constructor() {
      super();
      initializeConstantsAndPrototypes<XMLDocument>(XMLDocument, this, internalHandler, XMLDocumentConstantKeys, XMLDocumentPropertyKeys);
    }

    public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IXMLDocumentProperties extends IDocumentProperties {}

export interface IXMLDocumentReadonlyProperties extends IDocumentReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const XMLDocumentPropertyKeys = [...DocumentPropertyKeys];

// tslint:disable-next-line:variable-name
export const XMLDocumentConstantKeys = [...DocumentConstantKeys];

import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDocumentType, IXMLDocument, IDocument, IDOMImplementation } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMImplementation } = StateMachine<
  IDOMImplementation,
  IDOMImplementationProperties,
  IDOMImplementationReadonlyProperties
>('DOMImplementation');
export const internalHandler = new InternalHandler<IDOMImplementation>('DOMImplementation', getState, setState);

export default class DOMImplementation implements IDOMImplementation {
  constructor() {
    initializeConstantsAndPrototypes<DOMImplementation>(DOMImplementation, this, internalHandler, DOMImplementationConstantKeys, DOMImplementationPropertyKeys);
  }

  // methods

  public createDocument(namespace: string | null, qualifiedName: string, doctype?: IDocumentType | null): IXMLDocument {
    return internalHandler.run<IXMLDocument>(this, 'createDocument', [namespace, qualifiedName, doctype]);
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    return internalHandler.run<IDocumentType>(this, 'createDocumentType', [qualifiedName, publicId, systemId]);
  }

  public createHTMLDocument(title?: string): IDocument {
    return internalHandler.run<IDocument>(this, 'createHTMLDocument', [title]);
  }

  public hasFeature(): boolean {
    return internalHandler.run<boolean>(this, 'hasFeature', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMImplementationProperties {}

export interface IDOMImplementationReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const DOMImplementationPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const DOMImplementationConstantKeys = [];

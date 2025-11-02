import { IDOMImplementation, IDocumentType, IHTMLDocument, IXMLDocument, IDocument } from '../../base/interfaces';
import { setReadonlyOfDocument } from '../../base/classes/Document';
import { setReadonlyOfDocumentType } from '../../base/classes/DocumentType';
import DocumentType from './DocumentType';
import { HTML_NS, SVG_NS } from '../constants/namespaces';
import XMLDocument from './XMLDocument';
import HTMLDocument from './HTMLDocument';
import BaseDOMImplementation from '../../base/classes/DOMImplementation';

export default class DOMImplementation extends BaseDOMImplementation implements IDOMImplementation {
  public createDocument(
    namespaceURI: string | null,
    qualifiedName: string | null,
    doctype: IDocumentType | null,
  ): IXMLDocument {
    const xmlDocument = new XMLDocument();
    return populateDocument<IXMLDocument>(xmlDocument, namespaceURI, qualifiedName, doctype, this);
  }

  public createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType {
    const documentType = new DocumentType();
    setReadonlyOfDocumentType(documentType, {
      name: qualifiedName,
      nodeName: qualifiedName,
      publicId: publicId,
      systemId: systemId,
    });
    return documentType;
  }

  public createHTMLDocument(_title?: string): IHTMLDocument {
    const doctype = this.createDocumentType('html', '', '');
    const htmlDocument = new HTMLDocument();
    // const titleElem = document.createElement('title');
    populateDocument<IHTMLDocument>(htmlDocument, HTML_NS, 'html', doctype, this);
    return htmlDocument;
  }
}

function populateDocument<T extends IDocument>(
  document: T,
  namespaceURI: string | null,
  qualifiedName: string | null,
  doctype: IDocumentType | null,
  implementation: IDOMImplementation,
) {
  const properties: any = {
    doctype: doctype,
    implementation: implementation,
  };
  if (doctype) {
    document.appendChild(doctype);
    setReadonlyOfDocumentType(doctype, { ownerDocument: document });
  }
  properties.contentType = 'application/xml';
  if (namespaceURI === HTML_NS) {
    properties.contentType = 'application/xhtml+xml';
  } else if (namespaceURI === SVG_NS) {
    properties.contentType = 'image/svg+xml';
  }

  setReadonlyOfDocument(document, properties);

  if (namespaceURI && qualifiedName) {
    const root = document.createElementNS(namespaceURI, qualifiedName);
    document.appendChild(root);
  }

  return document as T;
}

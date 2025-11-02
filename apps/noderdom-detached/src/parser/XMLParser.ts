import {
  IDocument,
  IDOMImplementation,
  IElement,
  IHTMLTemplateElement,
  INode,
  IXMLDocument,
} from '../../base/interfaces';
import { SaxesParser } from 'saxes';
import DOMException from '../api/DOMException';
import { HTML_NS } from '../constants/namespaces';
import { setReadonlyOfElement } from '../../base/classes/Element';
import { setReadonlyOfDocument } from '../../base/classes/Document';

const HTML5_DOCTYPE = /<!doctype html>/i;
const PUBLIC_DOCTYPE = /<!doctype\s+([^\s]+)\s+public\s+"([^"]+)"\s+"([^"]+)"/i;
const SYSTEM_DOCTYPE = /<!doctype\s+([^\s]+)\s+system\s+"([^"]+)"/i;
const CUSTOM_NAME_DOCTYPE = /<!doctype\s+([^\s>]+)/i;

export default class XMLParser {
  public static parseFragment(markup: string, _domImplementation: IDOMImplementation, document: IDocument) {
    const fragment = document.createDocumentFragment();

    // Only parseFragment needs resolvePrefix per the saxes documentation:
    // https://github.com/lddubeau/saxes#parsing-xml-fragments
    const parser = createParser((fragment as unknown) as IElement, document, {
      xmlns: true,
      fragment: true,
      resolvePrefix(prefix: string) {
        // saxes wants undefined as the return value if the prefix is not defined, not null.
        return document.lookupNamespaceURI(prefix) || undefined;
      },
    });
    parser.write(markup).close();
    return fragment;
  }

  public static parseIntoDocument(markup: string, _domImplementation: IDOMImplementation, document: IXMLDocument) {
    const parser = createParser((document as unknown) as IElement, document, {
      defaultXMLVersion: '1.0',
      xmlns: true,
    });
    parser.write(markup);
    const encoding = parser.xmlDecl.encoding;
    if (encoding) {
      setReadonlyOfDocument(document, {
        characterSet: encoding,
        charset: encoding,
        inputEncoding: encoding,
      });
    }
    parser.close();
    return document;
  }
}

function parseDocType(document: IDocument, html: string) {
  if (HTML5_DOCTYPE.test(html)) {
    return createDocumentType(document, 'html', '', '');
  }

  const publicPieces = PUBLIC_DOCTYPE.exec(html);
  if (publicPieces) {
    return createDocumentType(document, publicPieces[1], publicPieces[2], publicPieces[3]);
  }

  const systemPieces = SYSTEM_DOCTYPE.exec(html);
  if (systemPieces) {
    return createDocumentType(document, systemPieces[1], '', systemPieces[2]);
  }

  const nameExec = CUSTOM_NAME_DOCTYPE.exec(html);
  const namePiece = (nameExec ? nameExec[1] : null) || 'html';
  return createDocumentType(document, namePiece, '', '');
}

function createDocumentType(ownerDocument: IDocument, name: string, publicId: string, systemId: string) {
  return ownerDocument.implementation.createDocumentType(name, publicId, systemId);
}

function appendChild(parent: IElement, child: INode) {
  // Template elements do not have children but instead store their content in a separate hierarchy.
  if (parent.tagName === 'template' && parent.namespaceURI === HTML_NS) {
    (parent as IHTMLTemplateElement).content.append(child);
  } else {
    parent.append(child);
  }
}

function createParser(rootNode: IElement, ownerDocument: IDocument, saxesOptions: any) {
  const parser = new SaxesParser(saxesOptions);
  const openStack: IElement[] = [rootNode];

  parser.ontext = (data: string) => {
    if (saxesOptions.fragment || openStack.length > 0) {
      appendChild(openStack[openStack.length - 1], ownerDocument.createTextNode(data));
    }
  };

  parser.oncdata = (data: string) => {
    appendChild(openStack[openStack.length - 1], ownerDocument.createCDATASection(data));
  };

  parser.onopentag = (tag: any) => {
    const { name: tagName, local: tagLocal, uri: tagURI, prefix: tagPrefix, attributes: tagAttributes } = tag;

    let elem: IElement;
    if (tagURI) {
      elem = ownerDocument.createElementNS(tagURI, tagLocal);
    } else {
      elem = ownerDocument.createElement(tagName);
    }
    setReadonlyOfElement(elem, {
      prefix: tagPrefix || null,
    });

    for (const key of Object.keys(tagAttributes)) {
      const { name, uri, value } = tagAttributes[key];
      if (uri) {
        elem.setAttributeNS(uri, name, value);
      } else {
        elem.setAttribute(name, value);
      }
    }
    appendChild(openStack[openStack.length - 1], elem);
    openStack.push(elem);
  };

  parser.onclosetag = () => {
    openStack.pop();
  };

  parser.oncomment = (data: string) => {
    appendChild(openStack[openStack.length - 1], ownerDocument.createComment(data));
  };

  parser.onprocessinginstruction = ({ target, body }: { target: string; body: string }) => {
    appendChild(openStack[openStack.length - 1], ownerDocument.createProcessingInstruction(target, body));
  };

  parser.ondoctype = (dt: string) => {
    appendChild(openStack[openStack.length - 1], parseDocType(ownerDocument, `<!doctype ${dt}>`));

    const entityMatcher = /<!ENTITY ([^ ]+) "([^"]+)">/g;
    const result = entityMatcher.exec(dt);
    if (result) {
      const [, name, value] = result;
      if (!(name in parser.ENTITIES)) {
        parser.ENTITIES[name] = value;
      }
    }
  };

  parser.onerror = (err: Error) => {
    throw new DOMException(err.message, 'SyntaxError');
  };

  return parser;
}

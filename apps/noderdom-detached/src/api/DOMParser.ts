import { IDocument, IDOMParser } from '../../base/interfaces';
import HTMLParser from '../parser/HTMLParser';
import XMLParser from '../parser/XMLParser';
import DOMImplementation from './DOMImplementation';
import { setReadonlyOfDocument } from '../../base/classes/Document';

export default class DOMParser implements IDOMParser {
  public parseFromString(str: string, type: string = ''): IDocument {
    switch (type) {
      case 'text/html': {
        return this.createDocument('html', type, str);
      }
      case 'text/xml':
      case 'application/xml':
      case 'application/xhtml+xml':
      case 'image/svg+xml': {
        try {
          return this.createDocument('xml', type, str);
        } catch (error) {
          const document = this.createDocument('xml', type);
          const element = document.createElementNS(
            'http://www.mozilla.org/newlayout/xml/parsererror.xml',
            'parsererror',
          );
          element.textContent = error.message;
          document.appendChild(element);
          return document;
        }
      }
      default:
        throw new TypeError('Invalid contentType');
    }
  }

  private createDocument(parsingMode: 'html' | 'xml', type: string, str?: string) {
    const domImplementation = new DOMImplementation();
    const document =
      parsingMode === 'html'
        ? domImplementation.createHTMLDocument()
        : domImplementation.createDocument(null, null, null);

    setReadonlyOfDocument(document, {
      contentType: type,
    });

    if (str !== undefined) {
      if (parsingMode === 'html') {
        HTMLParser.parseIntoDocument(str, domImplementation, document);
      } else if (parsingMode === 'xml') {
        XMLParser.parseIntoDocument(str, domImplementation, document);
      }
    }
    return document;
  }
}

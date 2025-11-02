import parse5, { TreeAdapter } from 'parse5';
import Parse5TreeAdapter from './Parse5TreeAdapter';
import { IDocument, IDOMImplementation } from '../../base/interfaces';

export default class HTMLParser {
  public static parseFragment(markup: string, domImplementation: IDOMImplementation, document: IDocument) {
    const config = {
      treeAdapter: (new Parse5TreeAdapter(domImplementation, document) as unknown) as TreeAdapter,
    };
    return parse5.parseFragment(document, markup, config);
  }

  public static parseIntoDocument(markup: string, domImplementation: IDOMImplementation, document: IDocument) {
    const config = {
      treeAdapter: (new Parse5TreeAdapter(domImplementation, document) as unknown) as TreeAdapter,
    };
    const response = parse5.parse(markup, config);
    return response;
  }
}

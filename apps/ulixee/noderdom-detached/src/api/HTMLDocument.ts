import { IHTMLDocument } from '../../base/interfaces';
import { HTMLDocumentGenerator } from '../../base/classes/HTMLDocument';
import Document from './Document';

// tslint:disable-next-line:variable-name
const Parent = HTMLDocumentGenerator(Document);

export default class HTMLDocument extends Parent implements IHTMLDocument {}

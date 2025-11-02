import { IXMLDocument } from '../../base/interfaces';
import { XMLDocumentGenerator } from '../../base/classes/XMLDocument';
import Document from './Document';

export default class XMLDocument extends XMLDocumentGenerator(Document) implements IXMLDocument {}

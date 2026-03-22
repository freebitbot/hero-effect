import type { IHTMLDocument } from "../../base/interfaces/official";
import {
	HTMLDocumentGenerator,
	type IHTMLDocumentProperties,
} from "../../base/official-klasses/HTMLDocument";
import StateMachine from "../../base/StateMachine";
import Document from "./Document";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDocument,
	IHTMLDocumentProperties
>();
const HTMLDocumentBaseClass = HTMLDocumentGenerator(Document);

export default class HTMLDocument
	extends HTMLDocumentBaseClass
	implements IHTMLDocument
{
	constructor() {
		super();
	}
}

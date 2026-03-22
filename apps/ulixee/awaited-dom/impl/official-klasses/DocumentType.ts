import type { IDocumentType } from "../../base/interfaces/official";
import {
	DocumentTypeGenerator,
	type IDocumentTypeProperties,
} from "../../base/official-klasses/DocumentType";
import StateMachine from "../../base/StateMachine";
import Node from "./Node";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDocumentType,
	IDocumentTypeProperties
>();
const DocumentTypeBaseClass = DocumentTypeGenerator(Node);

export default class DocumentType
	extends DocumentTypeBaseClass
	implements IDocumentType
{
	constructor() {
		super();
	}
}

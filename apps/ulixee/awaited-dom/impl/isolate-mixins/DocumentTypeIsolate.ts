import type { IDocumentTypeIsolate } from "../../base/interfaces/isolate";
import DocumentTypeIsolateBase, {
	type IDocumentTypeIsolateProperties,
} from "../../base/isolate-mixins/DocumentTypeIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDocumentTypeIsolate,
	IDocumentTypeIsolateProperties
>();

export default class DocumentTypeIsolate
	extends DocumentTypeIsolateBase
	implements IDocumentTypeIsolate {}

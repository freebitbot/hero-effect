import type { IDocumentFragmentIsolate } from "../../base/interfaces/isolate";
import DocumentFragmentIsolateBase, {
	type IDocumentFragmentIsolateProperties,
} from "../../base/isolate-mixins/DocumentFragmentIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDocumentFragmentIsolate,
	IDocumentFragmentIsolateProperties
>();

export default class DocumentFragmentIsolate
	extends DocumentFragmentIsolateBase
	implements IDocumentFragmentIsolate {}

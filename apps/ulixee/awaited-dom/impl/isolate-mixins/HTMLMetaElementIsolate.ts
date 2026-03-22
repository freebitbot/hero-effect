import type { IHTMLMetaElementIsolate } from "../../base/interfaces/isolate";
import HTMLMetaElementIsolateBase, {
	type IHTMLMetaElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLMetaElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMetaElementIsolate,
	IHTMLMetaElementIsolateProperties
>();

export default class HTMLMetaElementIsolate
	extends HTMLMetaElementIsolateBase
	implements IHTMLMetaElementIsolate {}

import type { IHTMLTitleElementIsolate } from "../../base/interfaces/isolate";
import HTMLTitleElementIsolateBase, {
	type IHTMLTitleElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTitleElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTitleElementIsolate,
	IHTMLTitleElementIsolateProperties
>();

export default class HTMLTitleElementIsolate
	extends HTMLTitleElementIsolateBase
	implements IHTMLTitleElementIsolate {}

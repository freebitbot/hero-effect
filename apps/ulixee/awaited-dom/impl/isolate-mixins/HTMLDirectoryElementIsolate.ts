import type { IHTMLDirectoryElementIsolate } from "../../base/interfaces/isolate";
import HTMLDirectoryElementIsolateBase, {
	type IHTMLDirectoryElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDirectoryElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDirectoryElementIsolate,
	IHTMLDirectoryElementIsolateProperties
>();

export default class HTMLDirectoryElementIsolate
	extends HTMLDirectoryElementIsolateBase
	implements IHTMLDirectoryElementIsolate {}

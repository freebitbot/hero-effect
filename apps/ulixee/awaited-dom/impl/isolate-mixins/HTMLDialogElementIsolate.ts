import type { IHTMLDialogElementIsolate } from "../../base/interfaces/isolate";
import HTMLDialogElementIsolateBase, {
	type IHTMLDialogElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDialogElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDialogElementIsolate,
	IHTMLDialogElementIsolateProperties
>();

export default class HTMLDialogElementIsolate
	extends HTMLDialogElementIsolateBase
	implements IHTMLDialogElementIsolate {}

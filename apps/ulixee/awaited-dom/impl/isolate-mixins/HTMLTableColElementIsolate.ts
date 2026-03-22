import type { IHTMLTableColElementIsolate } from "../../base/interfaces/isolate";
import HTMLTableColElementIsolateBase, {
	type IHTMLTableColElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTableColElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableColElementIsolate,
	IHTMLTableColElementIsolateProperties
>();

export default class HTMLTableColElementIsolate
	extends HTMLTableColElementIsolateBase
	implements IHTMLTableColElementIsolate {}

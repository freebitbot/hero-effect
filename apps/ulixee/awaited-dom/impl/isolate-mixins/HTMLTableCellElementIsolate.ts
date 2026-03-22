import type { IHTMLTableCellElementIsolate } from "../../base/interfaces/isolate";
import HTMLTableCellElementIsolateBase, {
	type IHTMLTableCellElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTableCellElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableCellElementIsolate,
	IHTMLTableCellElementIsolateProperties
>();

export default class HTMLTableCellElementIsolate
	extends HTMLTableCellElementIsolateBase
	implements IHTMLTableCellElementIsolate {}

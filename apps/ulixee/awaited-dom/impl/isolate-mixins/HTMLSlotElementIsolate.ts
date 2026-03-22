import type { IHTMLSlotElementIsolate } from "../../base/interfaces/isolate";
import HTMLSlotElementIsolateBase, {
	type IHTMLSlotElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLSlotElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSlotElementIsolate,
	IHTMLSlotElementIsolateProperties
>();

export default class HTMLSlotElementIsolate
	extends HTMLSlotElementIsolateBase
	implements IHTMLSlotElementIsolate {}

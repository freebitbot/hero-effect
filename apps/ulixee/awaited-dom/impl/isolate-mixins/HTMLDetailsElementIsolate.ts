import type { IHTMLDetailsElementIsolate } from "../../base/interfaces/isolate";
import HTMLDetailsElementIsolateBase, {
	type IHTMLDetailsElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDetailsElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDetailsElementIsolate,
	IHTMLDetailsElementIsolateProperties
>();

export default class HTMLDetailsElementIsolate
	extends HTMLDetailsElementIsolateBase
	implements IHTMLDetailsElementIsolate {}

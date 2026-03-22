import type { IHTMLImageElementIsolate } from "../../base/interfaces/isolate";
import HTMLImageElementIsolateBase, {
	type IHTMLImageElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLImageElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLImageElementIsolate,
	IHTMLImageElementIsolateProperties
>();

export default class HTMLImageElementIsolate
	extends HTMLImageElementIsolateBase
	implements IHTMLImageElementIsolate {}

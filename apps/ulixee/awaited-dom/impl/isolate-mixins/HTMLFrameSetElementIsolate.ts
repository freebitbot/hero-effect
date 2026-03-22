import type { IHTMLFrameSetElementIsolate } from "../../base/interfaces/isolate";
import HTMLFrameSetElementIsolateBase, {
	type IHTMLFrameSetElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLFrameSetElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFrameSetElementIsolate,
	IHTMLFrameSetElementIsolateProperties
>();

export default class HTMLFrameSetElementIsolate
	extends HTMLFrameSetElementIsolateBase
	implements IHTMLFrameSetElementIsolate {}

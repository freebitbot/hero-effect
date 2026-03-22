import type { IHTMLBaseElementIsolate } from "../../base/interfaces/isolate";
import HTMLBaseElementIsolateBase, {
	type IHTMLBaseElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLBaseElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBaseElementIsolate,
	IHTMLBaseElementIsolateProperties
>();

export default class HTMLBaseElementIsolate
	extends HTMLBaseElementIsolateBase
	implements IHTMLBaseElementIsolate {}

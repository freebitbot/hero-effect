import type { IHTMLModElementIsolate } from "../../base/interfaces/isolate";
import HTMLModElementIsolateBase, {
	type IHTMLModElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLModElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLModElementIsolate,
	IHTMLModElementIsolateProperties
>();

export default class HTMLModElementIsolate
	extends HTMLModElementIsolateBase
	implements IHTMLModElementIsolate {}

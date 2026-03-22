import type { IHTMLAudioElementIsolate } from "../../base/interfaces/isolate";
import HTMLAudioElementIsolateBase, {
	type IHTMLAudioElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLAudioElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAudioElementIsolate,
	IHTMLAudioElementIsolateProperties
>();

export default class HTMLAudioElementIsolate
	extends HTMLAudioElementIsolateBase
	implements IHTMLAudioElementIsolate {}

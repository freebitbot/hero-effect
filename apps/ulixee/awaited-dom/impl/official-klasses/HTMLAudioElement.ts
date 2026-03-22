import type { IHTMLAudioElement } from "../../base/interfaces/official";
import {
	HTMLAudioElementGenerator,
	type IHTMLAudioElementProperties,
} from "../../base/official-klasses/HTMLAudioElement";
import StateMachine from "../../base/StateMachine";
import HTMLMediaElement from "./HTMLMediaElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAudioElement,
	IHTMLAudioElementProperties
>();
const HTMLAudioElementBaseClass = HTMLAudioElementGenerator(HTMLMediaElement);

export default class HTMLAudioElement
	extends HTMLAudioElementBaseClass
	implements IHTMLAudioElement
{
	constructor() {
		super();
	}
}

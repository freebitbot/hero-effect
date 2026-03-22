import type { IHTMLImageElement } from "../../base/interfaces/official";
import {
	HTMLImageElementGenerator,
	type IHTMLImageElementProperties,
} from "../../base/official-klasses/HTMLImageElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLImageElement,
	IHTMLImageElementProperties
>();
const HTMLImageElementBaseClass = HTMLImageElementGenerator(HTMLElement);

export default class HTMLImageElement
	extends HTMLImageElementBaseClass
	implements IHTMLImageElement
{
	constructor() {
		super();
	}
}

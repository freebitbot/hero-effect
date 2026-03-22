import type { IHTMLTableCaptionElement } from "../../base/interfaces/official";
import {
	HTMLTableCaptionElementGenerator,
	type IHTMLTableCaptionElementProperties,
} from "../../base/official-klasses/HTMLTableCaptionElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableCaptionElement,
	IHTMLTableCaptionElementProperties
>();
const HTMLTableCaptionElementBaseClass =
	HTMLTableCaptionElementGenerator(HTMLElement);

export default class HTMLTableCaptionElement
	extends HTMLTableCaptionElementBaseClass
	implements IHTMLTableCaptionElement
{
	constructor() {
		super();
	}
}

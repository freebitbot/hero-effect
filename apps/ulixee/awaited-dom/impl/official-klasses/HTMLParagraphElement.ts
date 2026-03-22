import type { IHTMLParagraphElement } from "../../base/interfaces/official";
import {
	HTMLParagraphElementGenerator,
	type IHTMLParagraphElementProperties,
} from "../../base/official-klasses/HTMLParagraphElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLParagraphElement,
	IHTMLParagraphElementProperties
>();
const HTMLParagraphElementBaseClass =
	HTMLParagraphElementGenerator(HTMLElement);

export default class HTMLParagraphElement
	extends HTMLParagraphElementBaseClass
	implements IHTMLParagraphElement
{
	constructor() {
		super();
	}
}

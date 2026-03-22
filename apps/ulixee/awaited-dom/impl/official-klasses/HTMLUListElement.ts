import type { IHTMLUListElement } from "../../base/interfaces/official";
import {
	HTMLUListElementGenerator,
	type IHTMLUListElementProperties,
} from "../../base/official-klasses/HTMLUListElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLUListElement,
	IHTMLUListElementProperties
>();
const HTMLUListElementBaseClass = HTMLUListElementGenerator(HTMLElement);

export default class HTMLUListElement
	extends HTMLUListElementBaseClass
	implements IHTMLUListElement
{
	constructor() {
		super();
	}
}

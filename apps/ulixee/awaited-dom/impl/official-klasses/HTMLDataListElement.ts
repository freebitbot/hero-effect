import type { IHTMLDataListElement } from "../../base/interfaces/official";
import {
	HTMLDataListElementGenerator,
	type IHTMLDataListElementProperties,
} from "../../base/official-klasses/HTMLDataListElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataListElement,
	IHTMLDataListElementProperties
>();
const HTMLDataListElementBaseClass = HTMLDataListElementGenerator(HTMLElement);

export default class HTMLDataListElement
	extends HTMLDataListElementBaseClass
	implements IHTMLDataListElement
{
	constructor() {
		super();
	}
}

import type { IHTMLHeadElement } from "../../base/interfaces/official";
import {
	HTMLHeadElementGenerator,
	type IHTMLHeadElementProperties,
} from "../../base/official-klasses/HTMLHeadElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHeadElement,
	IHTMLHeadElementProperties
>();
const HTMLHeadElementBaseClass = HTMLHeadElementGenerator(HTMLElement);

export default class HTMLHeadElement
	extends HTMLHeadElementBaseClass
	implements IHTMLHeadElement
{
	constructor() {
		super();
	}
}

import type { IHTMLFormElement } from "../../base/interfaces/official";
import {
	HTMLFormElementGenerator,
	type IHTMLFormElementProperties,
} from "../../base/official-klasses/HTMLFormElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFormElement,
	IHTMLFormElementProperties
>();
const HTMLFormElementBaseClass = HTMLFormElementGenerator(HTMLElement);

export default class HTMLFormElement
	extends HTMLFormElementBaseClass
	implements IHTMLFormElement
{
	constructor() {
		super();
	}
}

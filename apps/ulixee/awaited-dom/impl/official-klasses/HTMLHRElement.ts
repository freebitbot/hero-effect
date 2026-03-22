import type { IHTMLHRElement } from "../../base/interfaces/official";
import {
	HTMLHRElementGenerator,
	type IHTMLHRElementProperties,
} from "../../base/official-klasses/HTMLHRElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHRElement,
	IHTMLHRElementProperties
>();
const HTMLHRElementBaseClass = HTMLHRElementGenerator(HTMLElement);

export default class HTMLHRElement
	extends HTMLHRElementBaseClass
	implements IHTMLHRElement
{
	constructor() {
		super();
	}
}

import type { IHTMLDetailsElement } from "../../base/interfaces/official";
import {
	HTMLDetailsElementGenerator,
	type IHTMLDetailsElementProperties,
} from "../../base/official-klasses/HTMLDetailsElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDetailsElement,
	IHTMLDetailsElementProperties
>();
const HTMLDetailsElementBaseClass = HTMLDetailsElementGenerator(HTMLElement);

export default class HTMLDetailsElement
	extends HTMLDetailsElementBaseClass
	implements IHTMLDetailsElement
{
	constructor() {
		super();
	}
}

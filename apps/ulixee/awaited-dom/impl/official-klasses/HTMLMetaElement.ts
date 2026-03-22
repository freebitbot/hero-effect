import type { IHTMLMetaElement } from "../../base/interfaces/official";
import {
	HTMLMetaElementGenerator,
	type IHTMLMetaElementProperties,
} from "../../base/official-klasses/HTMLMetaElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMetaElement,
	IHTMLMetaElementProperties
>();
const HTMLMetaElementBaseClass = HTMLMetaElementGenerator(HTMLElement);

export default class HTMLMetaElement
	extends HTMLMetaElementBaseClass
	implements IHTMLMetaElement
{
	constructor() {
		super();
	}
}

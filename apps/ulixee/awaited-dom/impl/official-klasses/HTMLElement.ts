import type { IHTMLElement } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import {
	HTMLElementGenerator,
	type IHTMLElementProperties,
} from "../../base/official-klasses/HTMLElement";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";
import ElementContentEditable from "../official-mixins/ElementContentEditable";
import ElementCSSInlineStyle from "../official-mixins/ElementCSSInlineStyle";
import HTMLOrSVGElement from "../official-mixins/HTMLOrSVGElement";
import Element from "./Element";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLElement,
	IHTMLElementProperties
>();
const HTMLElementBaseClass = HTMLElementGenerator(
	Element,
	ElementCSSInlineStyle,
	ElementContentEditable,
	HTMLOrSVGElement,
);

export default class HTMLElement
	extends HTMLElementBaseClass
	implements IHTMLElement
{
	constructor() {
		super();
	}

	// properties

	public get offsetParent(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "offsetParent"),
			awaitedOptions,
		);
	}
}

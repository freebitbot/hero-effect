import type {
	IDOMTokenList,
	IHTMLAnchorElement,
} from "../../base/interfaces/official";
import {
	HTMLAnchorElementGenerator,
	type IHTMLAnchorElementProperties,
} from "../../base/official-klasses/HTMLAnchorElement";
import StateMachine from "../../base/StateMachine";
import { createDOMTokenList } from "../create";
import HTMLHyperlinkElementUtils from "../official-mixins/HTMLHyperlinkElementUtils";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAnchorElement,
	IHTMLAnchorElementProperties
>();
const HTMLAnchorElementBaseClass = HTMLAnchorElementGenerator(
	HTMLElement,
	HTMLHyperlinkElementUtils,
);

export default class HTMLAnchorElement
	extends HTMLAnchorElementBaseClass
	implements IHTMLAnchorElement
{
	constructor() {
		super();
	}

	// properties

	public get relList(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "relList"),
			awaitedOptions,
		);
	}
}

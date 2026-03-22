import type {
	IDOMTokenList,
	IHTMLAreaElement,
} from "../../base/interfaces/official";
import {
	HTMLAreaElementGenerator,
	type IHTMLAreaElementProperties,
} from "../../base/official-klasses/HTMLAreaElement";
import StateMachine from "../../base/StateMachine";
import { createDOMTokenList } from "../create";
import HTMLHyperlinkElementUtils from "../official-mixins/HTMLHyperlinkElementUtils";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAreaElement,
	IHTMLAreaElementProperties
>();
const HTMLAreaElementBaseClass = HTMLAreaElementGenerator(
	HTMLElement,
	HTMLHyperlinkElementUtils,
);

export default class HTMLAreaElement
	extends HTMLAreaElementBaseClass
	implements IHTMLAreaElement
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

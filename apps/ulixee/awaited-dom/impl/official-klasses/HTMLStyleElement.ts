import type { IHTMLStyleElement } from "../../base/interfaces/official";
import {
	HTMLStyleElementGenerator,
	type IHTMLStyleElementProperties,
} from "../../base/official-klasses/HTMLStyleElement";
import StateMachine from "../../base/StateMachine";
import LinkStyle from "../official-mixins/LinkStyle";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLStyleElement,
	IHTMLStyleElementProperties
>();
const HTMLStyleElementBaseClass = HTMLStyleElementGenerator(
	HTMLElement,
	LinkStyle,
);

export default class HTMLStyleElement
	extends HTMLStyleElementBaseClass
	implements IHTMLStyleElement
{
	constructor() {
		super();
	}
}

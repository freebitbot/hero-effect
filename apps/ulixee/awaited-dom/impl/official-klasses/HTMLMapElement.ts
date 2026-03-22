import type { IHTMLMapElement } from "../../base/interfaces/official";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import {
	HTMLMapElementGenerator,
	type IHTMLMapElementProperties,
} from "../../base/official-klasses/HTMLMapElement";
import StateMachine from "../../base/StateMachine";
import { createSuperHTMLCollection } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMapElement,
	IHTMLMapElementProperties
>();
const HTMLMapElementBaseClass = HTMLMapElementGenerator(HTMLElement);

export default class HTMLMapElement
	extends HTMLMapElementBaseClass
	implements IHTMLMapElement
{
	constructor() {
		super();
	}

	// properties

	public get areas(): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "areas"),
			awaitedOptions,
		);
	}
}

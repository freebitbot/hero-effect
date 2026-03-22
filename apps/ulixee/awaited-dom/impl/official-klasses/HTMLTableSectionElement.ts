import type { IHTMLTableSectionElement } from "../../base/interfaces/official";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import {
	HTMLTableSectionElementGenerator,
	type IHTMLTableSectionElementProperties,
} from "../../base/official-klasses/HTMLTableSectionElement";
import StateMachine from "../../base/StateMachine";
import { createSuperHTMLCollection } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableSectionElement,
	IHTMLTableSectionElementProperties
>();
const HTMLTableSectionElementBaseClass =
	HTMLTableSectionElementGenerator(HTMLElement);

export default class HTMLTableSectionElement
	extends HTMLTableSectionElementBaseClass
	implements IHTMLTableSectionElement
{
	constructor() {
		super();
	}

	// properties

	public get rows(): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "rows"),
			awaitedOptions,
		);
	}
}

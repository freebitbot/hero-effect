import type { IHTMLCollectionBase } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import {
	HTMLCollectionBaseGenerator,
	type IHTMLCollectionBaseProperties,
} from "../../base/official-klasses/HTMLCollectionBase";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLCollectionBase,
	IHTMLCollectionBaseProperties
>();
const HTMLCollectionBaseBaseClass = HTMLCollectionBaseGenerator();

export default class HTMLCollectionBase
	extends HTMLCollectionBaseBaseClass
	implements IHTMLCollectionBase
{
	public item(index: number): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addMethod(this, "item", index),
			awaitedOptions,
		);
	}
}

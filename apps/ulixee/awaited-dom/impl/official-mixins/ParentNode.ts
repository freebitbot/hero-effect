import type { IParentNode } from "../../base/interfaces/official";
import type {
	ISuperElement,
	ISuperHTMLCollection,
	ISuperNodeList,
} from "../../base/interfaces/super";
import ParentNodeBase, {
	type IParentNodeProperties,
} from "../../base/official-mixins/ParentNode";
import StateMachine from "../../base/StateMachine";
import {
	createSuperElement,
	createSuperHTMLCollection,
	createSuperNodeList,
} from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IParentNode,
	IParentNodeProperties
>();

export default class ParentNode extends ParentNodeBase implements IParentNode {
	public get children(): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "children"),
			awaitedOptions,
		);
	}

	public get firstElementChild(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "firstElementChild"),
			awaitedOptions,
		);
	}

	public get lastElementChild(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "lastElementChild"),
			awaitedOptions,
		);
	}

	// methods

	public querySelector(selectors: string): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addMethod(this, "querySelector", selectors),
			awaitedOptions,
		);
	}

	public querySelectorAll(selectors: string): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addMethod(this, "querySelectorAll", selectors),
			awaitedOptions,
		);
	}
}

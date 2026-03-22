import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IParentNode } from "../interfaces/official";
import type {
	ISuperElement,
	ISuperHTMLCollection,
	ISuperNodeList,
} from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IParentNode,
	IParentNodeProperties
>();
export const awaitedHandler = new AwaitedHandler<IParentNode>(
	"ParentNode",
	getState,
	setState,
);

export default class ParentNode implements IParentNode {
	public get childElementCount(): Promise<number> {
		return awaitedHandler.getProperty<number>(this, "childElementCount", false);
	}

	public get children(): ISuperHTMLCollection {
		throw new Error("ParentNode.children getter not implemented");
	}

	public get firstElementChild(): ISuperElement {
		throw new Error("ParentNode.firstElementChild getter not implemented");
	}

	public get lastElementChild(): ISuperElement {
		throw new Error("ParentNode.lastElementChild getter not implemented");
	}

	// methods

	public querySelector(selectors: string): ISuperElement {
		throw new Error("ParentNode.querySelector not implemented");
	}

	public querySelectorAll(selectors: string): ISuperNodeList {
		throw new Error("ParentNode.querySelectorAll not implemented");
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IParentNodeProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly childElementCount?: Promise<number>;
	readonly children?: ISuperHTMLCollection;
	readonly firstElementChild?: ISuperElement;
	readonly lastElementChild?: ISuperElement;
}

export const ParentNodePropertyKeys = [
	"childElementCount",
	"children",
	"firstElementChild",
	"lastElementChild",
];

export const ParentNodeConstantKeys = [];

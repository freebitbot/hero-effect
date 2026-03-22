import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { INonElementParentNode } from "../interfaces/official";
import type { ISuperElement } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INonElementParentNode,
	INonElementParentNodeProperties
>();
export const awaitedHandler = new AwaitedHandler<INonElementParentNode>(
	"NonElementParentNode",
	getState,
	setState,
);

export default class NonElementParentNode implements INonElementParentNode {
	public getElementById(elementId: string): ISuperElement {
		throw new Error("NonElementParentNode.getElementById not implemented");
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INonElementParentNodeProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const NonElementParentNodePropertyKeys = [];

export const NonElementParentNodeConstantKeys = [];

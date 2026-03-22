import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { INonDocumentTypeChildNode } from "../interfaces/official";
import type { ISuperElement } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INonDocumentTypeChildNode,
	INonDocumentTypeChildNodeProperties
>();
export const awaitedHandler = new AwaitedHandler<INonDocumentTypeChildNode>(
	"NonDocumentTypeChildNode",
	getState,
	setState,
);

export default class NonDocumentTypeChildNode
	implements INonDocumentTypeChildNode
{
	public get nextElementSibling(): ISuperElement {
		throw new Error(
			"NonDocumentTypeChildNode.nextElementSibling getter not implemented",
		);
	}

	public get previousElementSibling(): ISuperElement {
		throw new Error(
			"NonDocumentTypeChildNode.previousElementSibling getter not implemented",
		);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INonDocumentTypeChildNodeProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly nextElementSibling?: ISuperElement;
	readonly previousElementSibling?: ISuperElement;
}

export const NonDocumentTypeChildNodePropertyKeys = [
	"nextElementSibling",
	"previousElementSibling",
];

export const NonDocumentTypeChildNodeConstantKeys = [];

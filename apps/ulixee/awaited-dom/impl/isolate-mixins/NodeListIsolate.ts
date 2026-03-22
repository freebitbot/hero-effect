import type { INodeListIsolate } from "../../base/interfaces/isolate";
import type { ISuperNode } from "../../base/interfaces/super";
import NodeListIsolateBase, {
	type INodeListIsolateProperties,
} from "../../base/isolate-mixins/NodeListIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperNode } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INodeListIsolate,
	INodeListIsolateProperties
>();

export default class NodeListIsolate
	extends NodeListIsolateBase
	implements INodeListIsolate
{
	public item(index: number): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addMethod(this, "item", index),
			awaitedOptions,
		);
	}
}

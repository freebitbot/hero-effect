import type { INodeList } from "../../base/interfaces/official";
import type { ISuperNode } from "../../base/interfaces/super";
import {
	type INodeListProperties,
	NodeListGenerator,
} from "../../base/official-klasses/NodeList";
import StateMachine from "../../base/StateMachine";
import { createSuperNode } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INodeList,
	INodeListProperties
>();
const NodeListBaseClass = NodeListGenerator();

export default class NodeList extends NodeListBaseClass implements INodeList {
	public item(index: number): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addMethod(this, "item", index),
			awaitedOptions,
		);
	}
}

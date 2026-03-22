import type { INonElementParentNode } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import NonElementParentNodeBase, {
	type INonElementParentNodeProperties,
} from "../../base/official-mixins/NonElementParentNode";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INonElementParentNode,
	INonElementParentNodeProperties
>();

export default class NonElementParentNode
	extends NonElementParentNodeBase
	implements INonElementParentNode
{
	public getElementById(elementId: string): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addMethod(this, "getElementById", elementId),
			awaitedOptions,
		);
	}
}

import type { INonDocumentTypeChildNode } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import NonDocumentTypeChildNodeBase, {
	type INonDocumentTypeChildNodeProperties,
} from "../../base/official-mixins/NonDocumentTypeChildNode";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INonDocumentTypeChildNode,
	INonDocumentTypeChildNodeProperties
>();

export default class NonDocumentTypeChildNode
	extends NonDocumentTypeChildNodeBase
	implements INonDocumentTypeChildNode
{
	public get nextElementSibling(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "nextElementSibling"),
			awaitedOptions,
		);
	}

	public get previousElementSibling(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "previousElementSibling"),
			awaitedOptions,
		);
	}
}

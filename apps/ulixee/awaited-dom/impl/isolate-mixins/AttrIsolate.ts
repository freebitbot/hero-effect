import type { IAttrIsolate } from "../../base/interfaces/isolate";
import type { ISuperElement } from "../../base/interfaces/super";
import AttrIsolateBase, {
	type IAttrIsolateProperties,
} from "../../base/isolate-mixins/AttrIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IAttrIsolate,
	IAttrIsolateProperties
>();

export default class AttrIsolate
	extends AttrIsolateBase
	implements IAttrIsolate
{
	public get ownerElement(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "ownerElement"),
			awaitedOptions,
		);
	}
}

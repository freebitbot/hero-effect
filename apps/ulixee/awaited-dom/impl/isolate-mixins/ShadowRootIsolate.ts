import type { IShadowRootIsolate } from "../../base/interfaces/isolate";
import type { ISuperElement } from "../../base/interfaces/super";
import ShadowRootIsolateBase, {
	type IShadowRootIsolateProperties,
} from "../../base/isolate-mixins/ShadowRootIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IShadowRootIsolate,
	IShadowRootIsolateProperties
>();

export default class ShadowRootIsolate
	extends ShadowRootIsolateBase
	implements IShadowRootIsolate
{
	public get host(): Promise<string> | ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "host"),
			awaitedOptions,
		);
	}
}

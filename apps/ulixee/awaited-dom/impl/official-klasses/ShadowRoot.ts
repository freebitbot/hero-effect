import type { IShadowRoot } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import {
	type IShadowRootProperties,
	ShadowRootGenerator,
} from "../../base/official-klasses/ShadowRoot";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";
import DocumentOrShadowRoot from "../official-mixins/DocumentOrShadowRoot";
import DocumentFragment from "./DocumentFragment";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IShadowRoot,
	IShadowRootProperties
>();
const ShadowRootBaseClass = ShadowRootGenerator(
	DocumentFragment,
	DocumentOrShadowRoot,
);

export default class ShadowRoot
	extends ShadowRootBaseClass
	implements IShadowRoot
{
	constructor() {
		super();
	}

	// properties

	public get host(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "host"),
			awaitedOptions,
		);
	}
}

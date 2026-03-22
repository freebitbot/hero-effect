import type { IDOMRect, IDOMRectList } from "../../base/interfaces/official";
import {
	DOMRectListGenerator,
	type IDOMRectListProperties,
} from "../../base/official-klasses/DOMRectList";
import StateMachine from "../../base/StateMachine";
import { createDOMRect } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDOMRectList,
	IDOMRectListProperties
>();
const DOMRectListBaseClass = DOMRectListGenerator();

export default class DOMRectList
	extends DOMRectListBaseClass
	implements IDOMRectList
{
	public item(index: number): IDOMRect {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMRect(
			awaitedPath.addMethod(this, "item", index),
			awaitedOptions,
		);
	}
}

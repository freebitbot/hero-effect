import type { ICaretPosition, IDOMRect } from "../../base/interfaces/official";
import type { ISuperNode } from "../../base/interfaces/super";
import {
	CaretPositionGenerator,
	type ICaretPositionProperties,
} from "../../base/official-klasses/CaretPosition";
import StateMachine from "../../base/StateMachine";
import { createDOMRect, createSuperNode } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ICaretPosition,
	ICaretPositionProperties
>();
const CaretPositionBaseClass = CaretPositionGenerator();

export default class CaretPosition
	extends CaretPositionBaseClass
	implements ICaretPosition
{
	public get offsetNode(): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addProperty(this, "offsetNode"),
			awaitedOptions,
		);
	}

	// methods

	public getClientRect(): IDOMRect {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMRect(
			awaitedPath.addMethod(this, "getClientRect"),
			awaitedOptions,
		);
	}
}

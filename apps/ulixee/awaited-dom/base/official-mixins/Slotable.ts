import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLSlotElement, ISlotable } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISlotable,
	ISlotableProperties
>();
export const awaitedHandler = new AwaitedHandler<ISlotable>(
	"Slotable",
	getState,
	setState,
);

export default class Slotable implements ISlotable {
	public get assignedSlot(): IHTMLSlotElement {
		throw new Error("Slotable.assignedSlot getter not implemented");
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISlotableProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly assignedSlot?: IHTMLSlotElement;
}

export const SlotablePropertyKeys = ["assignedSlot"];

export const SlotableConstantKeys = [];

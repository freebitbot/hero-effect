import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { ILinkStyle } from "../interfaces/official";
import type { ISuperStyleSheet } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ILinkStyle,
	ILinkStyleProperties
>();
export const awaitedHandler = new AwaitedHandler<ILinkStyle>(
	"LinkStyle",
	getState,
	setState,
);

export default class LinkStyle implements ILinkStyle {
	public get sheet(): ISuperStyleSheet {
		throw new Error("LinkStyle.sheet getter not implemented");
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ILinkStyleProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly sheet?: ISuperStyleSheet;
}

export const LinkStylePropertyKeys = ["sheet"];

export const LinkStyleConstantKeys = [];

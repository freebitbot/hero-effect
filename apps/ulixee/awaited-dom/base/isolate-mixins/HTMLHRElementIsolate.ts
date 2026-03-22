import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLHRElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHRElementIsolate,
	IHTMLHRElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLHRElementIsolate>(
	"HTMLHRElementIsolate",
	getState,
	setState,
);

export default class HTMLHRElementIsolate implements IHTMLHRElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHRElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLHRElementIsolatePropertyKeys = [];

export const HTMLHRElementIsolateConstantKeys = [];

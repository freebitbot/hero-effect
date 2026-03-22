import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTableCellElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableCellElementIsolate,
	IHTMLTableCellElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableCellElementIsolate>(
	"HTMLTableCellElementIsolate",
	getState,
	setState,
);

export default class HTMLTableCellElementIsolate
	implements IHTMLTableCellElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCellElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLTableCellElementIsolatePropertyKeys = [];

export const HTMLTableCellElementIsolateConstantKeys = [];

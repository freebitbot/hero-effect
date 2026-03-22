import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLBRElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBRElementIsolate,
	IHTMLBRElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLBRElementIsolate>(
	"HTMLBRElementIsolate",
	getState,
	setState,
);

export default class HTMLBRElementIsolate implements IHTMLBRElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBRElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLBRElementIsolatePropertyKeys = [];

export const HTMLBRElementIsolateConstantKeys = [];

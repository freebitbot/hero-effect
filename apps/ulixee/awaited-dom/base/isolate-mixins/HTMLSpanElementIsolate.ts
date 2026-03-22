import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLSpanElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSpanElementIsolate,
	IHTMLSpanElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLSpanElementIsolate>(
	"HTMLSpanElementIsolate",
	getState,
	setState,
);

export default class HTMLSpanElementIsolate
	implements IHTMLSpanElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSpanElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLSpanElementIsolatePropertyKeys = [];

export const HTMLSpanElementIsolateConstantKeys = [];

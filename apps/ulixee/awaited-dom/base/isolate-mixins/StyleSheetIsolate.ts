import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IStyleSheetIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IStyleSheetIsolate,
	IStyleSheetIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IStyleSheetIsolate>(
	"StyleSheetIsolate",
	getState,
	setState,
);

export default class StyleSheetIsolate implements IStyleSheetIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const StyleSheetIsolatePropertyKeys = [];

export const StyleSheetIsolateConstantKeys = [];

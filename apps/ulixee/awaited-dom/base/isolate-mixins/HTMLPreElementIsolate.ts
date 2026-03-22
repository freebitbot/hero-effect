import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLPreElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLPreElementIsolate,
	IHTMLPreElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLPreElementIsolate>(
	"HTMLPreElementIsolate",
	getState,
	setState,
);

export default class HTMLPreElementIsolate implements IHTMLPreElementIsolate {
	public get width(): Promise<number> | Promise<string> {
		return awaitedHandler.getProperty<number>(this, "width", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLPreElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly width?: Promise<number> | Promise<string>;
}

export const HTMLPreElementIsolatePropertyKeys = ["width"];

export const HTMLPreElementIsolateConstantKeys = [];

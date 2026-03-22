import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLDataElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataElementIsolate,
	IHTMLDataElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDataElementIsolate>(
	"HTMLDataElementIsolate",
	getState,
	setState,
);

export default class HTMLDataElementIsolate implements IHTMLDataElementIsolate {
	public get value(): Promise<string> | Promise<number> {
		return awaitedHandler.getProperty<string>(this, "value", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDataElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly value?: Promise<string> | Promise<number>;
}

export const HTMLDataElementIsolatePropertyKeys = ["value"];

export const HTMLDataElementIsolateConstantKeys = [];

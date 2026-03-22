import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTimeElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTimeElementIsolate,
	IHTMLTimeElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLTimeElementIsolate>(
	"HTMLTimeElementIsolate",
	getState,
	setState,
);

export default class HTMLTimeElementIsolate implements IHTMLTimeElementIsolate {
	public get dateTime(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "dateTime", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTimeElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly dateTime?: Promise<string>;
}

export const HTMLTimeElementIsolatePropertyKeys = ["dateTime"];

export const HTMLTimeElementIsolateConstantKeys = [];

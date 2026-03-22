import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLHtmlElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHtmlElementIsolate,
	IHTMLHtmlElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLHtmlElementIsolate>(
	"HTMLHtmlElementIsolate",
	getState,
	setState,
);

export default class HTMLHtmlElementIsolate implements IHTMLHtmlElementIsolate {
	public get version(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "version", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHtmlElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly version?: Promise<string>;
}

export const HTMLHtmlElementIsolatePropertyKeys = ["version"];

export const HTMLHtmlElementIsolateConstantKeys = [];

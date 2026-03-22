import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTitleElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTitleElementIsolate,
	IHTMLTitleElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLTitleElementIsolate>(
	"HTMLTitleElementIsolate",
	getState,
	setState,
);

export default class HTMLTitleElementIsolate
	implements IHTMLTitleElementIsolate
{
	public get text(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "text", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTitleElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly text?: Promise<string>;
}

export const HTMLTitleElementIsolatePropertyKeys = ["text"];

export const HTMLTitleElementIsolateConstantKeys = [];

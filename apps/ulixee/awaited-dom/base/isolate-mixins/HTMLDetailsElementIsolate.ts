import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLDetailsElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDetailsElementIsolate,
	IHTMLDetailsElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDetailsElementIsolate>(
	"HTMLDetailsElementIsolate",
	getState,
	setState,
);

export default class HTMLDetailsElementIsolate
	implements IHTMLDetailsElementIsolate
{
	public get open(): Promise<boolean> {
		return awaitedHandler.getProperty<boolean>(this, "open", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDetailsElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly open?: Promise<boolean>;
}

export const HTMLDetailsElementIsolatePropertyKeys = ["open"];

export const HTMLDetailsElementIsolateConstantKeys = [];

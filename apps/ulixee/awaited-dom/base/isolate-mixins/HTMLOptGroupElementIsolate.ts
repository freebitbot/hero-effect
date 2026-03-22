import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLOptGroupElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOptGroupElementIsolate,
	IHTMLOptGroupElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptGroupElementIsolate>(
	"HTMLOptGroupElementIsolate",
	getState,
	setState,
);

export default class HTMLOptGroupElementIsolate
	implements IHTMLOptGroupElementIsolate
{
	public get disabled(): Promise<boolean> {
		return awaitedHandler.getProperty<boolean>(this, "disabled", false);
	}

	public get label(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "label", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptGroupElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly disabled?: Promise<boolean>;
	readonly label?: Promise<string>;
}

export const HTMLOptGroupElementIsolatePropertyKeys = ["disabled", "label"];

export const HTMLOptGroupElementIsolateConstantKeys = [];

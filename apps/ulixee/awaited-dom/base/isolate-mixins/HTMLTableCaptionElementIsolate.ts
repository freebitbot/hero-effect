import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTableCaptionElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableCaptionElementIsolate,
	IHTMLTableCaptionElementIsolateProperties
>();
export const awaitedHandler =
	new AwaitedHandler<IHTMLTableCaptionElementIsolate>(
		"HTMLTableCaptionElementIsolate",
		getState,
		setState,
	);

export default class HTMLTableCaptionElementIsolate
	implements IHTMLTableCaptionElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCaptionElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLTableCaptionElementIsolatePropertyKeys = [];

export const HTMLTableCaptionElementIsolateConstantKeys = [];

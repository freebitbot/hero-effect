import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLDocumentIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDocumentIsolate,
	IHTMLDocumentIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDocumentIsolate>(
	"HTMLDocumentIsolate",
	getState,
	setState,
);

export default class HTMLDocumentIsolate implements IHTMLDocumentIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDocumentIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLDocumentIsolatePropertyKeys = [];

export const HTMLDocumentIsolateConstantKeys = [];

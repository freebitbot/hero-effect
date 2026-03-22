import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLAudioElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAudioElementIsolate,
	IHTMLAudioElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLAudioElementIsolate>(
	"HTMLAudioElementIsolate",
	getState,
	setState,
);

export default class HTMLAudioElementIsolate
	implements IHTMLAudioElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAudioElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLAudioElementIsolatePropertyKeys = [];

export const HTMLAudioElementIsolateConstantKeys = [];

import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IRadioNodeListIsolate } from "../interfaces/isolate";
import type { ISuperNode } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IRadioNodeListIsolate,
	IRadioNodeListIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IRadioNodeListIsolate>(
	"RadioNodeListIsolate",
	getState,
	setState,
);

export default class RadioNodeListIsolate implements IRadioNodeListIsolate {
	public get value(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "value", false);
	}

	[index: number]: ISuperNode;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IRadioNodeListIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly value?: Promise<string>;
}

export const RadioNodeListIsolatePropertyKeys = ["value"];

export const RadioNodeListIsolateConstantKeys = [];

import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IMediaKeys } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IMediaKeys,
	IMediaKeysProperties
>();
export const awaitedHandler = new AwaitedHandler<IMediaKeys>(
	"MediaKeys",
	getState,
	setState,
);

export function MediaKeysGenerator() {
	return class MediaKeys implements IMediaKeys {
		constructor() {}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				MediaKeysPropertyKeys,
				MediaKeysConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaKeysProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const MediaKeysPropertyKeys = [];

export const MediaKeysConstantKeys = [];

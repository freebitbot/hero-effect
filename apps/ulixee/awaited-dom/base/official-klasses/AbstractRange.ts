import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IAbstractRange } from "../interfaces/official";
import type { ISuperNode } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IAbstractRange,
	IAbstractRangeProperties
>();
export const awaitedHandler = new AwaitedHandler<IAbstractRange>(
	"AbstractRange",
	getState,
	setState,
);

export function AbstractRangeGenerator() {
	return class AbstractRange implements IAbstractRange {
		constructor() {}

		// properties

		public get collapsed(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "collapsed", false);
		}

		public get endContainer(): ISuperNode {
			throw new Error("AbstractRange.endContainer getter not implemented");
		}

		public get endOffset(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "endOffset", false);
		}

		public get startContainer(): ISuperNode {
			throw new Error("AbstractRange.startContainer getter not implemented");
		}

		public get startOffset(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "startOffset", false);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				AbstractRangePropertyKeys,
				AbstractRangeConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAbstractRangeProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly collapsed?: Promise<boolean>;
	readonly endContainer?: ISuperNode;
	readonly endOffset?: Promise<number>;
	readonly startContainer?: ISuperNode;
	readonly startOffset?: Promise<number>;
}

export const AbstractRangePropertyKeys = [
	"collapsed",
	"endContainer",
	"endOffset",
	"startContainer",
	"startOffset",
];

export const AbstractRangeConstantKeys = [];

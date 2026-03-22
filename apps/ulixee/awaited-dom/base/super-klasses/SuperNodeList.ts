import AwaitedHandler from "../AwaitedHandler";
import AwaitedIterator from "../AwaitedIterator";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	INodeListIsolate,
	IRadioNodeListIsolate,
} from "../interfaces/isolate";
import type { ISuperNode, ISuperNodeList } from "../interfaces/super";
import {
	type INodeListIsolateProperties,
	NodeListIsolateConstantKeys,
	NodeListIsolatePropertyKeys,
} from "../isolate-mixins/NodeListIsolate";
import {
	type IRadioNodeListIsolateProperties,
	RadioNodeListIsolateConstantKeys,
	RadioNodeListIsolatePropertyKeys,
} from "../isolate-mixins/RadioNodeListIsolate";
import NodeFactory from "../NodeFactory";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISuperNodeList,
	ISuperNodeListProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperNodeList>(
	"SuperNodeList",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<ISuperNodeList>(
	getState,
	setState,
	awaitedHandler,
);
export const awaitedIterator = new AwaitedIterator<ISuperNodeList, ISuperNode>(
	getState,
	setState,
	awaitedHandler,
);

export function SuperNodeListGenerator(
	NodeListIsolate: Constructable<INodeListIsolate>,
	RadioNodeListIsolate: Constructable<IRadioNodeListIsolate>,
) {
	const Parent = ClassMixer(NodeListIsolate, [
		RadioNodeListIsolate,
	]) as unknown as Constructable<INodeListIsolate & IRadioNodeListIsolate>;

	return class SuperNodeList
		extends Parent
		implements ISuperNodeList, PromiseLike<ISuperNodeList>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createSuperNodeList",
				createIterableName: "createSuperNode",
			});
			// proxy supports indexed property access
			const proxy = new Proxy(this, {
				get(target, prop) {
					if (prop in target) {
						// @ts-expect-error
						const value: any = target[prop];
						if (typeof value === "function") return value.bind(target);
						return value;
					}

					// delegate to indexer property
					if (
						(typeof prop === "string" || typeof prop === "number") &&
						!isNaN(prop as unknown as number)
					) {
						const param = parseInt(prop as string, 10);
						return target.item(param);
					}
				},
			});

			return proxy;
		}

		// properties

		public get length(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "length", false);
		}

		// methods

		public item(index: number): ISuperNode {
			throw new Error("SuperNodeList.item not implemented");
		}

		public then<TResult1 = ISuperNodeList, TResult2 = never>(
			onfulfilled?:
				| ((value: ISuperNodeList) => PromiseLike<TResult1> | TResult1)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => PromiseLike<TResult2> | TResult2)
				| undefined
				| null,
		): Promise<TResult1 | TResult2> {
			return nodeFactory
				.createInstanceWithNodePointer(this)
				.then(onfulfilled, onrejected);
		}

		public async forEach(
			callbackfn: (
				value: ISuperNode,
				key: number,
				parent: ISuperNodeList,
			) => void,
			thisArg?: any,
		): Promise<void> {
			for (const [key, value] of await this.entries()) {
				await callbackfn.call(thisArg, value, key, this);
			}
		}

		public entries(): Promise<IterableIterator<[number, ISuperNode]>> {
			return awaitedIterator.load(this).then((x) => x.entries());
		}

		public keys(): Promise<IterableIterator<number>> {
			return awaitedIterator.load(this).then((x) => x.keys());
		}

		public values(): Promise<IterableIterator<ISuperNode>> {
			return awaitedIterator.load(this).then((x) => x.values());
		}

		public [Symbol.iterator](): Iterator<ISuperNode> {
			return awaitedIterator.iterateNodePointers(this);
		}

		[index: number]: ISuperNode;

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				SuperNodeListPropertyKeys,
				SuperNodeListConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeListProperties
	extends INodeListIsolateProperties,
		IRadioNodeListIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;
	createIterableName: string;

	readonly length?: Promise<number>;
}

export const SuperNodeListPropertyKeys = [
	...NodeListIsolatePropertyKeys,
	...RadioNodeListIsolatePropertyKeys,
	"length",
];

export const SuperNodeListConstantKeys = [
	...NodeListIsolateConstantKeys,
	...RadioNodeListIsolateConstantKeys,
];

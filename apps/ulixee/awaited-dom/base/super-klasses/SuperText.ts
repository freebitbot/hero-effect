import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	ICharacterDataIsolate,
	INodeIsolate,
} from "../interfaces/isolate";
import type {
	INonDocumentTypeChildNode,
	ISlotable,
} from "../interfaces/official";
import type { ISuperText } from "../interfaces/super";
import {
	CharacterDataIsolateConstantKeys,
	CharacterDataIsolatePropertyKeys,
	type ICharacterDataIsolateProperties,
} from "../isolate-mixins/CharacterDataIsolate";
import {
	type INodeIsolateProperties,
	NodeIsolateConstantKeys,
	NodeIsolatePropertyKeys,
} from "../isolate-mixins/NodeIsolate";
import NodeFactory from "../NodeFactory";
import {
	type INonDocumentTypeChildNodeProperties,
	NonDocumentTypeChildNodeConstantKeys,
	NonDocumentTypeChildNodePropertyKeys,
} from "../official-mixins/NonDocumentTypeChildNode";
import {
	type ISlotableProperties,
	SlotableConstantKeys,
	SlotablePropertyKeys,
} from "../official-mixins/Slotable";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISuperText,
	ISuperTextProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperText>(
	"SuperText",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<ISuperText>(
	getState,
	setState,
	awaitedHandler,
);

export function SuperTextGenerator(
	CharacterDataIsolate: Constructable<ICharacterDataIsolate>,
	NodeIsolate: Constructable<INodeIsolate>,
	NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>,
	Slotable: Constructable<ISlotable>,
) {
	const Parent = ClassMixer(CharacterDataIsolate, [
		NodeIsolate,
		NonDocumentTypeChildNode,
		Slotable,
	]) as unknown as Constructable<
		ICharacterDataIsolate & INodeIsolate & INonDocumentTypeChildNode & ISlotable
	>;

	return class SuperText
		extends Parent
		implements ISuperText, PromiseLike<ISuperText>
	{
		constructor(_data?: string) {
			super(_data);
			setState(this, {
				createInstanceName: "createSuperText",
			});
		}

		// properties

		public get wholeText(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "wholeText", false);
		}

		// methods

		public splitText(offset: number): Promise<ISuperText> {
			return awaitedHandler.runMethod<ISuperText>(this, "splitText", [offset]);
		}

		public then<TResult1 = ISuperText, TResult2 = never>(
			onfulfilled?:
				| ((value: ISuperText) => PromiseLike<TResult1> | TResult1)
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

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				SuperTextPropertyKeys,
				SuperTextConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextProperties
	extends ICharacterDataIsolateProperties,
		INodeIsolateProperties,
		INonDocumentTypeChildNodeProperties,
		ISlotableProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly wholeText?: Promise<string>;
}

export const SuperTextPropertyKeys = [
	...CharacterDataIsolatePropertyKeys,
	...NodeIsolatePropertyKeys,
	...NonDocumentTypeChildNodePropertyKeys,
	...SlotablePropertyKeys,
	"wholeText",
];

export const SuperTextConstantKeys = [
	...CharacterDataIsolateConstantKeys,
	...NodeIsolateConstantKeys,
	...NonDocumentTypeChildNodeConstantKeys,
	...SlotableConstantKeys,
];

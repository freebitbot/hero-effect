import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IBody } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBody, IBodyProperties>();
export const awaitedHandler = new AwaitedHandler<IBody>(
	"Body",
	getState,
	setState,
);

export default class Body implements IBody {
	public get bodyUsed(): Promise<boolean> {
		return awaitedHandler.getProperty<boolean>(this, "bodyUsed", false);
	}

	// methods

	public arrayBuffer(): Promise<ArrayBuffer> {
		return awaitedHandler.runMethod<ArrayBuffer>(this, "arrayBuffer", []);
	}

	public json(): Promise<any> {
		return awaitedHandler.runMethod<any>(this, "json", []);
	}

	public text(): Promise<string> {
		return awaitedHandler.runMethod<string>(this, "text", []);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IBodyProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly bodyUsed?: Promise<boolean>;
}

export const BodyPropertyKeys = ["bodyUsed"];

export const BodyConstantKeys = [];

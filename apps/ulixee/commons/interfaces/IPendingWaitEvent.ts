import addGlobalInstance from "../lib/addGlobalInstance";
import { registerSerializableErrorType } from "../lib/TypeSerializer";
import type IResolvablePromise from "./IResolvablePromise";

export class CanceledPromiseError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "CanceledPromiseError";
	}
}

export default interface IPendingWaitEvent {
	id: number;
	event: string | symbol;
	resolvable: IResolvablePromise;
	error: CanceledPromiseError;
}

addGlobalInstance(CanceledPromiseError);
registerSerializableErrorType(CanceledPromiseError);

import { CanceledPromiseError } from "@ulixee/commons/interfaces/IPendingWaitEvent";
import addGlobalInstance from "@ulixee/commons/lib/addGlobalInstance";
import { registerSerializableErrorType } from "@ulixee/commons/lib/TypeSerializer";

export default class DisconnectedError extends CanceledPromiseError {
	public code = "DisconnectedError";
	constructor(
		readonly host: string,
		message?: string,
	) {
		super(message ?? `This transport has been disconnected (host: ${host})`);
		this.name = "DisconnectedError";
	}
}

addGlobalInstance(DisconnectedError);
registerSerializableErrorType(DisconnectedError);

import addGlobalInstance from "@ulixee/commons/lib/addGlobalInstance";
import { registerSerializableErrorType } from "@ulixee/commons/lib/TypeSerializer";
import DisconnectedError from "@ulixee/net/errors/DisconnectedError";

export default class DisconnectedFromCoreError extends DisconnectedError {
	public override code = "DisconnectedFromCore";
	constructor(readonly coreHost: string) {
		super(`This Hero has been disconnected from Core (coreHost: ${coreHost})`);
		this.name = "DisconnectedFromCore";
	}
}

addGlobalInstance(DisconnectedFromCoreError);
registerSerializableErrorType(DisconnectedFromCoreError);

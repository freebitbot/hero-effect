import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import type IBrowserHooks from "../hooks/IBrowserHooks";
import type IBrowserContext from "./IBrowserContext";
import type IBrowserEngine from "./IBrowserEngine";
import type IDevtoolsSession from "./IDevtoolsSession";

export default interface IBrowser extends ITypedEventEmitter<IBrowserEvents> {
	id: string;
	name: string;
	fullVersion: string;
	majorVersion: number;
	engine: IBrowserEngine;
	devtoolsSession: IDevtoolsSession;
	browserContextsById: Map<string, IBrowserContext>;
	hooks: IBrowserHooks;
	close(): Promise<void | Error>;
}

export interface IBrowserEvents {
	close: void;
	"new-context": { context: IBrowserContext };
	"new-session": { session: IDevtoolsSession };
}

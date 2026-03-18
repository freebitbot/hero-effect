import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import type IDataSnippet from "@ulixee/hero-interfaces/IDataSnippet";
import type IDetachedElement from "@ulixee/hero-interfaces/IDetachedElement";
import type IDetachedResource from "@ulixee/hero-interfaces/IDetachedResource";

// This interface exists for DatastoreInternal to import

export default interface ICoreSession
	extends ITypedEventEmitter<{ close: void }> {
	sessionId: string;
	setSnippet(key: string, value: any): Promise<void>;
	getSnippets(sessionId: string, key: string): Promise<IDataSnippet[]>;
	getCollectedAssetNames(
		sessionId: string,
	): Promise<{ resources: string[]; elements: string[]; snippets: string[] }>;
	getDetachedElements(
		sessionId: string,
		name: string,
	): Promise<IDetachedElement[]>;
	getDetachedResources(
		sessionId: string,
		name: string,
	): Promise<IDetachedResource[]>;
	recordOutput(changes: IOutputChangeToRecord[]): void;
}

export interface IOutputChangeToRecord {
	type: string;
	value: any;
	path: string;
	timestamp: number;
}

import type { IDbJsTypes } from "@ulixee/sql-engine/interfaces/IDbTypes";
import type SqlParser from "@ulixee/sql-engine/lib/Parser";
import type Datastore from "../lib/Datastore";
import type { IQueryInternalCallbacks } from "../lib/DatastoreInternal";
import type { ISchema } from "../storage-engines/AbstractStorageEngine";
import type IDatastoreComponents from "./IDatastoreComponents";
import type { TCrawlers, TExtractors, TTables } from "./IDatastoreComponents";
import type IQueryOptions from "./IQueryOptions";

export default interface IStorageEngine {
	inputsByName: { [name: string]: ISchema };
	schemasByName: { [name: string]: ISchema };
	virtualTableNames: Set<string>;
	filterLocalTableCalls(entityCalls: string[]): string[];
	bind(datastore: IDatastoreComponents<TTables, TExtractors, TCrawlers>): void;
	create(datastore: Datastore, previousVersion?: Datastore): Promise<void>;
	query<TResult>(
		sql: string | SqlParser,
		boundValues: IDbJsTypes[],
		metadata?: IQueryOptions,
		virtualEntitiesByName?: {
			[name: string]: {
				parameters?: Record<string, any>;
				records: Record<string, any>[];
			};
		},
		callbacks?: IQueryInternalCallbacks,
	): Promise<TResult>;
	close(): Promise<void>;
}

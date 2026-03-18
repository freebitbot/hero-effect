import type { IPayment } from "@ulixee/platform-specification";
import type { IDatastoreApiTypes } from "@ulixee/platform-specification/datastore";
import type { IDatastoreQueryResult } from "@ulixee/platform-specification/datastore/DatastoreApis";
import type Crawler from "../lib/Crawler";
import type Extractor from "../lib/Extractor";
import type { IOutputClass } from "../lib/Output";
import type ResultIterable from "../lib/ResultIterable";
import type Table from "../lib/Table";
import type ICrawlerOutputSchema from "./ICrawlerOutputSchema";
import type IDatastoreMetadata from "./IDatastoreMetadata";
import type IExtractorSchema from "./IExtractorSchema";
import type { ExtractSchemaType } from "./IExtractorSchema";
import type IQueryOptions from "./IQueryOptions";

export default interface IExtractorContext<TSchema extends IExtractorSchema> {
	input?: ExtractSchemaType<TSchema["input"]>;
	readonly outputs?: ExtractSchemaType<TSchema["output"]>[];
	readonly Output?: IOutputClass<ExtractSchemaType<TSchema["output"]>>;
	schema?: TSchema;
	datastoreMetadata: IDatastoreMetadata;
	datastoreAffiliateId?: string;
	callerAffiliateId?: string;

	readonly onQueryResult?: (
		result: IDatastoreQueryResult,
	) => Promise<any> | void;
	readonly queryId: string;
	readonly authentication: IDatastoreApiTypes["Datastore.query"]["args"]["authentication"];
	readonly onCacheUpdated?: (
		sessionId: string,
		crawler: string,
		action: "cached" | "evicted",
	) => Promise<void> | void;

	readonly payment: IPayment;
	crawl<T extends Crawler>(
		crawler: T,
		options?: T["runArgsType"],
	): Promise<ICrawlerOutputSchema>;
	run<T extends Extractor>(
		extractor: T,
		options?: T["runArgsType"],
	): ResultIterable<ExtractSchemaType<T["schema"]["output"]>>;
	fetch<T extends Extractor>(
		extractor: T,
		options?: T["runArgsType"],
	): ResultIterable<ExtractSchemaType<T["schema"]["output"]>>;
	// TODO: add table options typing
	fetch<T extends Table>(
		table: T,
		options?: IQueryOptions,
	): ResultIterable<ExtractSchemaType<T["schema"]>>;
	query<TResult>(
		sql: string,
		boundValues: any[],
		options: IQueryOptions,
	): Promise<TResult>;
}

import SqliteTable from "@ulixee/commons/lib/SqliteTable";
import TypeSerializer from "@ulixee/commons/lib/TypeSerializer";
import type IQueryLogEntry from "@ulixee/datastore/interfaces/IQueryLogEntry";
import type { Database as SqliteDatabase } from "better-sqlite3";

export default class QueryLogTable extends SqliteTable<IQueryLogRecord> {
	constructor(db: SqliteDatabase) {
		super(
			db as any,
			"QueryLog",
			[
				["queryId", "TEXT", "NOT NULL PRIMARY KEY"],
				["datastoreId", "TEXT", "NOT NULL"],
				["version", "TEXT", "NOT NULL"],
				["query", "TEXT", "NOT NULL"],
				["date", "DATETIME", "NOT NULL"],
				["input", "TEXT"],
				["outputs", "TEXT"],
				["affiliateId", "TEXT"],
				["error", "TEXT"],
				["channelHoldId", "TEXT"],
				["creditId", "TEXT"],
				["bytes", "INTEGER"],
				["milliseconds", "INTEGER"],
				["microgons", "INTEGER"],
				["heroSessionIds", "TEXT"],
				["cloudNodeHost", "TEXT"],
				["cloudNodeIdentity", "TEXT"],
			],
			true,
		);
	}

	public record(
		queryId: string,
		datastoreId: string,
		version: string,
		query: string,
		startTime: number,
		affiliateId: string,
		input: any,
		outputs: any[],
		error: Error,
		channelHoldId: string,
		creditId: string,
		microgons: bigint,
		bytes: number,
		milliseconds: number,
		heroSessionIds: string[],
		cloudNodeHost: string,
		cloudNodeIdentity: string,
	): void {
		microgons ??= 0n;

		this.insertNow([
			queryId,
			datastoreId,
			version,
			query,
			startTime,
			input ? TypeSerializer.stringify(input) : undefined,
			outputs ? TypeSerializer.stringify(outputs) : undefined,
			affiliateId,
			error ? TypeSerializer.stringify(error) : undefined,
			channelHoldId,
			creditId,
			bytes,
			milliseconds,
			microgons,
			heroSessionIds ? TypeSerializer.stringify(heroSessionIds) : undefined,
			cloudNodeHost,
			cloudNodeIdentity,
		]);
	}
}

export interface IQueryLogRecord extends IQueryLogEntry {
	heroSessionIds: string;
}

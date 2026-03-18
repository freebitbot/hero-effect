import Database = require("better-sqlite3");

import type { Database as SqliteDatabase } from "better-sqlite3";
import * as Fs from "fs";
import env from "../env";
import DatastoreEntityStatsTable from "./DatastoreEntityStatsTable";
import DatastoreStatsTable from "./DatastoreStatsTable";

export default class StatsDb {
	public readonly datastores: DatastoreStatsTable;
	public readonly datastoreEntities: DatastoreEntityStatsTable;

	private db: SqliteDatabase;

	constructor(baseDir: string) {
		if (!Fs.existsSync(baseDir)) Fs.mkdirSync(baseDir, { recursive: true });
		this.db = new Database(`${baseDir}/stats.db`);
		if (env.enableSqliteWalMode) {
			this.db.unsafeMode(false);
			this.db.pragma("journal_mode = WAL");
			this.db.pragma("synchronous = NORMAL");
		}

		this.datastores = new DatastoreStatsTable(this.db);
		this.datastoreEntities = new DatastoreEntityStatsTable(this.db);
	}

	public close(): void {
		if (this.db) {
			this.db.pragma("wal_checkpoint(TRUNCATE)");
			this.db.close();
		}
		this.db = null;
	}
}

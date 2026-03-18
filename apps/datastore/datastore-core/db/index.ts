import Database = require("better-sqlite3");

import type { Database as SqliteDatabase } from "better-sqlite3";
import * as Fs from "fs";
import env from "../env";
import DatastoreVersionsTable from "./DatastoreVersionsTable";

export default class DatastoresDb {
	public readonly versions: DatastoreVersionsTable;

	private db: SqliteDatabase;

	constructor(baseDir: string) {
		if (!Fs.existsSync(baseDir)) Fs.mkdirSync(baseDir, { recursive: true });
		this.db = new Database(`${baseDir}/metadata.db`);
		if (env.enableSqliteWalMode) {
			this.db.unsafeMode(false);
			this.db.pragma("journal_mode = WAL");
			this.db.pragma("synchronous = FULL");
		}

		this.versions = new DatastoreVersionsTable(this.db);
	}

	public close(): void {
		if (this.db?.open) {
			this.db.pragma("wal_checkpoint(TRUNCATE)");
			this.db.close();
		}
		this.db = null;
	}
}

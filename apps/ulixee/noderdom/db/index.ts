import * as Path from "node:path";
import Sqlite, { type Database } from "better-sqlite3";

const dbName = "main.db";
const dbPath = Path.resolve(__dirname, "../files/1-processed", dbName);
const db: Database = new Sqlite(dbPath);

export default db;
export { dbPath, dbName };

import type { Database } from "@ulixee/bun-better-sqlite3";
import type BunStatement from "../../sqlite3/src/statement";
import type { Transaction as BaseTransaction } from "../../sqlite3/src/types";

export type SqliteDatabase = Database;
export type Statement = BunStatement;
export type Transaction = BaseTransaction;

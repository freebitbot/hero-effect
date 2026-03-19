import * as Path from "node:path";
import * as Paths from "./paths.json";

export const probesDataDir = Path.resolve(__dirname, Paths["probe-data"]);
export const rootDir = Path.resolve(__dirname, Paths.root);

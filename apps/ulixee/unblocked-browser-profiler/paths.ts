import * as Path from "node:path";

import * as Paths from "./paths.json";

export const profileDataDir = Path.resolve(__dirname, Paths["profile-data"]);

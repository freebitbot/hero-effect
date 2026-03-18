// LOAD DATA
import { readFileSync } from "fs";
import Browser from "./Browser";
import { getDataFilePath } from "./paths";

export default class Browsers {
	public static filePath = getDataFilePath("browsersById.json");

	private static internalById: IBrowserById;

	public static all(): Browser[] {
		return Object.values(Browsers.getById());
	}

	public static byId(id: string): Browser {
		return Browsers.getById()[id];
	}

	private static getById(): IBrowserById {
		if (!Browsers.internalById) {
			Browsers.internalById = JSON.parse(
				readFileSync(Browsers.filePath, "utf8"),
			);
			for (const [id, value] of Object.entries(Browsers.internalById)) {
				Browsers.internalById[id] = Browser.load(value);
			}
		}
		return Browsers.internalById;
	}
}

interface IBrowserById {
	[id: string]: Browser;
}

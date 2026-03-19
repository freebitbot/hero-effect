import { readFileSync } from "node:fs";
import OperatingSystem from "./OperatingSystem";
import { getDataFilePath } from "./paths";

export default class OperatingSystems {
	public static filePath = getDataFilePath("operatingSystemsById.json");
	private static internalById: IOperatingSystemById;

	public static all(): OperatingSystem[] {
		return Object.values(OperatingSystems.getById());
	}

	public static byId(id: string): OperatingSystem {
		return OperatingSystems.getById()[id];
	}

	private static getById(): IOperatingSystemById {
		if (!OperatingSystems.internalById) {
			OperatingSystems.internalById = JSON.parse(
				readFileSync(OperatingSystems.filePath, "utf8"),
			);
			for (const [id, value] of Object.entries(OperatingSystems.internalById)) {
				OperatingSystems.internalById[id] = OperatingSystem.load(value);
			}
		}
		return OperatingSystems.internalById;
	}
}

interface IOperatingSystemById {
	[id: string]: OperatingSystem;
}

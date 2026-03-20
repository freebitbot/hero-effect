import type ICommandMarker from "../interfaces/ICommandMarker";
import type BrowserContext from "./BrowserContext";

interface IMarker {
	id: number;
	action: string;
}

export class DefaultCommandMarker implements ICommandMarker {
	public get lastId(): number {
		return this.commandMarkerId;
	}

	public get last(): IMarker {
		return this.markers[this.markers.length - 1];
	}

	public markers: IMarker[] = [];

	private commandMarkerId = 0;
	private waitForLocationStartingMark = 0;

	constructor(readonly browserContext: BrowserContext) {}

	incrementMark(action: string): void {
		this.commandMarkerId += 1;

		// handle cases like waitForLocation two times in a row
		if (!action.startsWith("waitFor") || action === "waitForLocation") {
			if (this.last?.action.startsWith("waitFor")) {
				this.waitForLocationStartingMark = this.commandMarkerId;
			}
		}
		if (action === "goto") {
			this.waitForLocationStartingMark = this.commandMarkerId;
		}
		this.markers.push({ action, id: this.commandMarkerId });
	}

	getStartingCommandIdFor(marker: "waitForLocation"): number {
		if (marker === "waitForLocation") {
			console.info(`Starting Mark for ${marker}`, {
				startingMark: this.waitForLocationStartingMark,
				markers: this.markers,
			});
			return this.waitForLocationStartingMark;
		}
		return 0;
	}
}

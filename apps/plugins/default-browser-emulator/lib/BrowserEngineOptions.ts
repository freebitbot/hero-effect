import type IBrowserEngineOption from "@ulixee/unblocked-specification/agent/browser/IBrowserEngineOption";
import type { IVersion } from "@ulixee/unblocked-specification/plugin/IUserAgentOption";
import type DataLoader from "./DataLoader";

type IBrowserEngineOptionAndVersion = IBrowserEngineOption & {
	version: IVersion;
};

export default class BrowserEngineOptions {
	public readonly default: IBrowserEngineOptionAndVersion;
	public readonly installedOptions: IBrowserEngineOptionAndVersion[] = [];

	private browserIdsNeedingDataFiles = new Set<string>();

	constructor(
		private dataLoader: DataLoader,
		defaultBrowserId: string,
	) {
		this.checkForInstalled();
		this.default = this.installedOptions[0];
		if (defaultBrowserId) {
			const id = defaultBrowserId.replace("@ulixee/", "");
			this.default = this.installedOptions.find((x) => x.id === id);
			if (!this.default) {
				if (this.browserIdsNeedingDataFiles.has(id)) {
					throw new Error(
						`The Default Browser Engine specified in your environment does not have Emulation Data Files installed.:\n\n

----------- update to the latest data files using ----------

         npx @ulixee/default-browser-emulator update-unblocked-emulators

------------------------------------------------------------`,
					);
				}
				throw new Error(`The Default Browser Engine specified in your environment is not installed\n\n
-------- reinstall the browser in your working directory -------

                npm install @ulixee/${defaultBrowserId}

----------------------------------------------------------------
      `);
			}
		}
	}

	private checkForInstalled(): void {
		for (const engine of this.dataLoader.browserEngineOptions) {
			if (!this.dataLoader.isInstalledBrowser(`as-${engine.id}`)) {
				this.browserIdsNeedingDataFiles.add(engine.id);
				continue;
			}

			// Use the engine's major version as the version
			this.installedOptions.push({
				...engine,
				version: {
					major: String(engine.majorVersion),
					minor: "0",
					patch: "0",
					build: "0",
				},
			});
		}

		this.installedOptions.sort((a, b) => {
			return Number(b.version.major) - Number(a.version.major);
		});
	}
}

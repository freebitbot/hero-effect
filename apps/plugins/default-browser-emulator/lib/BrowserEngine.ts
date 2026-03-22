import { existsSync } from "node:fs";
import type IBrowserEngine from "@ulixee/unblocked-specification/agent/browser/IBrowserEngine";
import type IBrowserEngineOption from "@ulixee/unblocked-specification/agent/browser/IBrowserEngineOption";

export default class BrowserEngine implements IBrowserEngine {
	public name: string;
	public fullVersion: string;
	public executablePath: string;
	public executablePathEnvVar: string;
	public userDataDir?: string;

	public readonly launchArguments: string[] = [];

	public isHeaded?: boolean;
	public isInstalled: boolean;
	public doesBrowserAnimateScrolling = false;

	private engineOption: IBrowserEngineOption;

	constructor(browserEngineOption: IBrowserEngineOption) {
		this.engineOption = browserEngineOption;
		this.name = browserEngineOption.name;
		this.fullVersion = `${browserEngineOption.majorVersion}.0.${browserEngineOption.buildVersion}.0`;

		// changes at version 90
		this.doesBrowserAnimateScrolling = browserEngineOption.majorVersion > 90;

		// Hardcoded Chrome path (macOS)
		this.executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
		this.executablePathEnvVar = `CHROME_${browserEngineOption.majorVersion}_BIN`;
		this.isInstalled = existsSync(this.executablePath);
	}

	public async verifyLaunchable(): Promise<void> {
		if (!existsSync(this.executablePath)) {
			throw new Error(`Chrome executable not found at "${this.executablePath}"`);
		}
	}
}

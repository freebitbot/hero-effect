import { existsSync } from "node:fs";
import type IBrowserEngine from "@ulixee/unblocked-specification/agent/browser/IBrowserEngine";

interface IChromeSource {
	isInstalled: boolean;
	fullVersion: string;
	executablePath: string;
	executablePathEnvVar: string;
	launchArgs?: string[];
	validateHostRequirements(): Promise<void>;
}

export default class ChromeEngine implements IBrowserEngine {
	public name = "chrome";
	public fullVersion: string;
	public executablePath: string;
	public executablePathEnvVar: string;
	public readonly launchArguments: string[] = [];
	public isInstalled: boolean;
	public userDataDir?: string;
	public doesBrowserAnimateScrolling = false;
	public isHeaded?: boolean;

	constructor(readonly source: IChromeSource) {
		this.isInstalled = source.isInstalled;
		this.fullVersion = source.fullVersion;
		this.executablePath = source.executablePath;
		this.executablePathEnvVar = source.executablePathEnvVar;
		if (source.launchArgs) this.launchArguments = [...source.launchArgs];
	}

	async verifyLaunchable(): Promise<void> {
		if (!existsSync(this.executablePath)) {
			throw new Error(`Chrome executable not found at "${this.executablePath}"`);
		}
		await this.source.validateHostRequirements();
	}
}

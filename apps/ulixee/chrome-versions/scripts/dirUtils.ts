import Fs from "node:fs";
import Os from "node:os";
import * as Path from "node:path";

const tmp = Os.tmpdir();
const downloadsDir = Path.join(__dirname, "..", "downloads");
const assetsDir = Path.join(__dirname, "..", "assets");

const fileExts = {
	win32: "exe",
	win64: "exe",
	mac: "dmg",
	mac_arm64: "dmg",
	linux: "deb",
};

export { assetsDir, downloadsDir };

mkdirIfNeeded(downloadsDir);

export function getDownloadPath(os: string, version: string): string {
	return Path.join(downloadsDir, `chrome_${version}_${os}.${fileExts[os]}`);
}

export function mkTempDir(): string {
	const { sep } = require("path");
	return Fs.mkdtempSync(`${tmp}${sep}`);
}

export function getAssetName(os: string, version: string): string {
	return `chrome_${version}_${os}.tar.gz`;
}

export function getAssetPath(os: string, version: string): string {
	return Path.join(assetsDir, getAssetName(os, version));
}

function mkdirIfNeeded(dir): void {
	if (!Fs.existsSync(dir)) Fs.mkdirSync(dir, { recursive: true });
}

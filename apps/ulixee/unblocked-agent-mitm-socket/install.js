import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
	chmodSync,
	copyFileSync,
	existsSync,
	mkdirSync,
	readFileSync,
	renameSync,
	writeFileSync,
} from "node:fs";
import { arch as _arch, platform as _platform } from "node:os";
import { gunzipSync } from "node:zlib";
import { httpGet } from "@ulixee/commons/lib/downloadFile";
import packageJson from "./package.json";

const arch = process.env.npm_config_cpu || _arch();
const platform = process.env.npm_config_os || _platform();

const outDir = `${__dirname}/dist/${platform}-${arch}`;

if (!existsSync(outDir)) {
	mkdirSync(outDir, { recursive: true });
}
const { version } = packageJson;
const releasesAssetsUrl = `https://github.com/ulixee/hero/releases/download/v${version}`;

const forceBuild = Boolean(
	JSON.parse(process.env.ULX_MITM_REBUILD_SOCKET || "false"),
);

(async function install() {
	let programName = "connect";
	const filename = buildFilename();
	if (platform === "win32") {
		programName += ".exe";
	}

	try {
		if (existsSync(`${__dirname}/dist/artifacts.json`)) {
			const artifacts = JSON.parse(
				readFileSync(`${__dirname}/dist/artifacts.json`, "utf8"),
			);
			let artPlatform = platform;
			if (platform === "win32") {
				artPlatform = "windows";
			}
			let artArch = arch;
			if (arch === "x86_64") {
				artArch = "amd64";
			}
			const artifact = artifacts.find(
				(x) => x.goos === artPlatform && x.goarch === artArch,
			);
			if (artifact) {
				copyFileSync(artifact.path, `${outDir}/${artifact.name}`);
				saveVersion();
				console.log("Successfully copied Agent connect library");
			}
		}
	} catch (err) {
		console.log("Error copying Agent connect library from prebuilds", err);
	}

	const installed = getInstalledVersion();
	if (
		!forceBuild &&
		installed &&
		installed.startsWith(version) &&
		isBinaryInstalled(programName)
	) {
		console.log("Latest Agent connect library already installed");
		process.exit(0);
	}

	const checksum = await getSourceChecksum(filename);
	const filepath = `${releasesAssetsUrl}/${filename}`;

	if (!checksum) {
		if (tryBuild(programName)) {
			saveVersion();
			console.log("Successfully compiled Agent connect library");
			process.exit(0);
		}

		const goVersionNeeded = getGoVersionNeeded();
		if (forceBuild) {
			console.log(
				`You requested to rebuild the Ulixee Unblocked Agent connect library, but the needed version of golang is not available. Please install golang ${goVersionNeeded} and try again.`,
			);
		} else {
			console.log(
				`The architecture file you need for the Agent connect library is not available (${filepath}).\n\n
You can install golang ${goVersionNeeded} (https://golang.org/) and run "go build" from the mitm-socket/go directory\n\n`,
			);
		}
		process.exit(1);
	}

	console.log(
		"Downloading Agent connect library from %s (checksum=%s)",
		filepath,
		checksum,
	);
	const zippedFile = await download(filepath);

	const downloadedChecksum = getFileChecksum(zippedFile);
	if (downloadedChecksum !== checksum) {
		console.log("WARN!! Checksum mismatch for the Agent connect library", {
			checksum,
			downloadedChecksum,
		});
		process.exit(1);
	}

	const file = gunzipSync(zippedFile);

	writeFileSync(`${outDir}/${programName}`, file);
	chmodSync(`${outDir}/${programName}`, 0o755);
	saveVersion();
	console.log("Successfully downloaded");
	process.exit(0);
})().catch((err) => {
	console.log("Could not install MitmSocket library", err);
	process.exit(1);
});

function tryBuild(programName) {
	const goVersionNeeded = getGoVersionNeeded();
	const isGoInstalled = isGoVersionInstalled(goVersionNeeded);
	console.log("Is go installed? %s, %s", goVersionNeeded, isGoInstalled);

	if (isGoInstalled) {
		if (compile()) {
			renameSync(`${__dirname}/go/${programName}`, `${outDir}/${programName}`);
			return true;
		}
	}
	return false;
}

function getInstalledVersion() {
	if (existsSync(`${outDir}/version`)) {
		return readFileSync(`${outDir}/version`, "utf8");
	}
	return null;
}

function isBinaryInstalled(programName) {
	return existsSync(`${outDir}/${programName}`);
}

function saveVersion() {
	writeFileSync(`${outDir}/version`, version);
}

function buildFilename() {
	let arch_name = arch;
	let platform_name = String(platform);
	if (arch === "x64") arch_name = "x86_64";

	if (platform === "win32") {
		platform_name = "win";
	}
	if (platform === "darwin") {
		platform_name = "mac";
	}

	return `connect_${version}_${platform_name}_${arch_name}.gz`;
}

function download(filepath) {
	return new Promise((resolve, reject) => {
		const req = httpGet(filepath, async (res) => {
			if (res.statusCode >= 400) {
				return reject(
					new Error(
						`ERROR downloading needed Agent library - ${res.statusCode}:${res.statusMessage}`,
					),
				);
			}

			try {
				const buffer = [];
				for await (const chunk of res) {
					buffer.push(chunk);
				}
				const output = Buffer.concat(buffer);
				resolve(output);
			} catch (err) {
				reject(err);
			}
		});
		req.on("error", (err) => {
			console.log("ERROR downloading needed Agent library %s", filepath, err);
			reject(err);
		});
	});
}

function getFileChecksum(file) {
	return createHash("sha256").update(file).digest().toString("hex");
}

async function getSourceChecksum(filename) {
	if (forceBuild) return null;
	const buffer = await download(`${releasesAssetsUrl}/connect.checksum`);

	const checksum = buffer.toString("utf8");

	const match = checksum.split(/\r?\n/).find((x) => x.endsWith(filename));

	const expectedChecksum = match ? match.split(/\s+/).shift() : undefined;

	if (!expectedChecksum) {
		throw new Error("Invalid checksum found for Agent MitmSocket library");
	}

	return expectedChecksum;
}

/////// /// GO BUILD ////////////////////////////////////////////////////////////////////////////////

function compile() {
	try {
		execSync("go build", { cwd: `${__dirname}/go` });
		return true;
	} catch (err) {
		console.log(
			"Error compiling Agent MitmSocket library.\n\nWill download instead.",
			err.message,
		);
		return false;
	}
}

function getGoVersionNeeded() {
	const goMod = readFileSync(`${__dirname}/go/go.mod`, "utf8");
	const goMatch = goMod.match(/go ([\d.]+)/);
	return goMatch[1];
}

function isGoVersionInstalled(wantedVersion) {
	const goVersionNeeded = wantedVersion.split(".");
	try {
		const goVersionResult = execSync("go version", { encoding: "utf8" });
		const goVersion = goVersionResult.match(/go version go([\d.]+)\s\w+\/\w+/);
		if (!goVersion || !goVersion.length) return false;
		if (goVersion && goVersion.length) {
			const versionParts = goVersion[1].split(".");
			if (versionParts[0] !== goVersionNeeded[0]) return false;
			if (parseInt(versionParts[1], 10) < parseInt(goVersionNeeded[1], 10))
				return false;
			return true;
		}
	} catch (err) {
		return false;
	}
}

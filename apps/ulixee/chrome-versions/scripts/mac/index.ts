import { getAssetPath } from "../dirUtils";
import { downloadInstaller } from "../downloadInstaller";
import type GithubReleases from "../GithubReleases";
import Versions from "../Versions";
import convertMacDmg from "./convertMacDmg";

export async function process(
	os: string,
	version: string,
	releases: GithubReleases,
) {
	const assetPath = getAssetPath(os, version);
	const downloadPage = Versions.get(version)[os];

	const downloadedPath = await downloadInstaller(downloadPage, os, version);
	await convertMacDmg(downloadedPath, assetPath, version, os === "mac_arm64");

	const release = await releases.get(version);
	await releases.uploadAsset(release, assetPath);
}

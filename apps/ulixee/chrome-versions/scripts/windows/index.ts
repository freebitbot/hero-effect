import { getAssetPath } from "../dirUtils";
import { downloadInstaller } from "../downloadInstaller";
import type GithubReleases from "../GithubReleases";
import Versions from "../Versions";
import extractWindowsExe from "../windows/extractWindowsExe";

export async function process(
	os: string,
	version: string,
	releases: GithubReleases,
) {
	const assetPath = getAssetPath(os, version);
	const url = Versions.get(version)[os];

	const downloaded = await downloadInstaller(url, os, version);
	await extractWindowsExe(downloaded, assetPath, version);
	const release = await releases.get(version);
	await releases.uploadAsset(release, assetPath);
}

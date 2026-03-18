import type IDevtoolsSession from "@ulixee/unblocked-specification/agent/browser/IDevtoolsSession";
import type IEmulationProfile from "@ulixee/unblocked-specification/plugin/IEmulationProfile";

export default async function setActiveAndFocused(
	emulationProfile: IEmulationProfile,
	devtools: IDevtoolsSession,
): Promise<void> {
	await devtools
		.send("Emulation.setFocusEmulationEnabled", { enabled: true })
		.catch((err) => err);
}

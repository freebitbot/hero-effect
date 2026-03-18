import type ITlsSettings from "@ulixee/unblocked-specification/agent/net/ITlsSettings";
import type IEmulationProfile from "@ulixee/unblocked-specification/plugin/IEmulationProfile";

export default function configureSessionTls(
	emulationProfile: IEmulationProfile,
	settings: ITlsSettings,
): void {
	const { browserName, browserVersion, string } =
		emulationProfile.userAgentOption;
	settings.tlsClientHelloId = `${browserName}-${browserVersion.major}`;
	settings.proxyUseragent = string;
}

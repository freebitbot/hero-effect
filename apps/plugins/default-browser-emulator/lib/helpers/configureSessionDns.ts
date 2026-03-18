import type IDnsSettings from "@ulixee/unblocked-specification/agent/net/IDnsSettings";
import type IEmulationProfile from "@ulixee/unblocked-specification/plugin/IEmulationProfile";

export default function configureSessionDns(
	emulationProfile: IEmulationProfile,
	settings: IDnsSettings,
): void {
	settings.dnsOverTlsConnection = null;
}

import type IBrowserEngine from "../agent/browser/IBrowserEngine";
import type IBrowserUserConfig from "../agent/browser/IBrowserUserConfig";
import type IViewport from "../agent/browser/IViewport";
import type IDeviceProfile from "./IDeviceProfile";
import type IGeolocation from "./IGeolocation";
import type IUserAgentOption from "./IUserAgentOption";

export default interface IEmulationProfile<T = any> {
	userAgentOption?: IUserAgentOption;
	windowNavigatorPlatform?: string;
	deviceProfile?: IDeviceProfile;
	browserEngine?: IBrowserEngine;
	options?: IEmulationOptions;
	customEmulatorConfig?: T;

	viewport?: IViewport;
	timezoneId?: string;
	locale?: string;
	upstreamProxyUrl?: string;
	upstreamProxyUseLocalDns?: boolean;
	upstreamProxyIpMask?: {
		publicIp?: string;
		proxyIp?: string;
		ipLookupService?: string;
	};
	geolocation?: IGeolocation;
	dnsOverTlsProvider?: { host: string; servername: string; port?: number };
}

export type IEmulationOptions = IBrowserUserConfig &
	Pick<
		IEmulationProfile,
		| "viewport"
		| "timezoneId"
		| "locale"
		| "upstreamProxyIpMask"
		| "upstreamProxyUseLocalDns"
		| "upstreamProxyUrl"
		| "geolocation"
		| "dnsOverTlsProvider"
	>;

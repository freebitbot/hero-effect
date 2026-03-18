import type IDomStorage from "@ulixee/unblocked-specification/agent/browser/IDomStorage";
import type { ICookie } from "@ulixee/unblocked-specification/agent/net/ICookie";
import type IDeviceProfile from "@ulixee/unblocked-specification/plugin/IDeviceProfile";
import type IGeolocation from "@ulixee/unblocked-specification/plugin/IGeolocation";
import type IUserAgentOption from "@ulixee/unblocked-specification/plugin/IUserAgentOption";

export default interface IUserProfile {
	cookies?: ICookie[];
	storage?: IDomStorage;
	userAgentString?: string;
	userAgent?: IUserAgentOption;
	// need actual user agent details...
	timezoneId?: string;
	locale?: string;
	geolocation?: IGeolocation;
	deviceProfile?: IDeviceProfile;
}

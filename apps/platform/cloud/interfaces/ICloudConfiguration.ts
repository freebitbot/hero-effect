import type { ListenOptions } from "node:net";
import type Identity from "@ulixee/platform-utils/lib/Identity";
import type { ServerOptions } from "https";

export default interface ICloudConfiguration
	extends ListenOptions,
		ServerOptions {
	networkIdentity?: Identity;
	nodeRegistryHost: string | "self";
	publicHost?: string;
	hostedServicesServerOptions?: ListenOptions & ServerOptions;
	servicesSetupHost: string;
	disableDesktopCore?: boolean;
}

import type { ServerOptions } from "node:https";
import type { ListenOptions } from "node:net";
import type Identity from "@ulixee/platform-utils/lib/Identity";

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

import type { ServerOptions } from "node:https";
import type { ListenOptions } from "node:net";

export default interface ICloudConfiguration
	extends ListenOptions,
		ServerOptions {
	publicHost?: string;
}

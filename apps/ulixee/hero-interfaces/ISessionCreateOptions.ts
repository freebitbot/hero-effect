import type { IEmulationOptions } from "@ulixee/unblocked-specification/plugin/IEmulationProfile";
import type {
	IUnblockedPluginClass,
	PluginConfigs,
} from "@ulixee/unblocked-specification/plugin/IUnblockedPlugin";
import type IScriptInvocationMeta from "./IScriptInvocationMeta";
import type ISessionOptions from "./ISessionOptions";
import type IUserProfile from "./IUserProfile";

export default interface ISessionCreateOptions
	extends ISessionOptions,
		IEmulationOptions {
	sessionId?: string;
	sessionName?: string;
	sessionKeepAlive?: boolean;
	sessionPersistence?: boolean;
	sessionDbDirectory?: string;
	resumeSessionId?: string;
	resumeSessionStartLocation?: "currentLocation" | "sessionStart";
	replaySessionId?: string;
	mode?:
		| "development"
		| "multiverse"
		| "production"
		| "timetravel"
		| "browserless";
	userAgent?: string;
	scriptInvocationMeta?: IScriptInvocationMeta;
	userProfile?: IUserProfile;
	input?: any;

	dependencyMap?: { [clientPluginId: string]: string[] };
	corePluginPaths?: string[];
	showChrome?: boolean;
	showChromeAlive?: boolean;
	desktopConnectionId?: string;
	showChromeInteractions?: boolean;
	// Config use to configure all unblocked, and hero core plugins
	pluginConfigs?: PluginConfigs;
	unblockedPlugins?: IUnblockedPluginClass[];
}

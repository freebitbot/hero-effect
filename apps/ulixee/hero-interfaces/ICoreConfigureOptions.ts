import type ISessionRegistry from "@ulixee/hero-core/interfaces/ISessionRegistry";
import type { IUnblockedPluginClass } from "@ulixee/unblocked-specification/plugin/IUnblockedPlugin";

export default interface ICoreConfigureOptions {
	maxConcurrentClientCount?: number;
	maxConcurrentClientsPerBrowser?: number;
	dataDir?: string;
	defaultUnblockedPlugins?: IUnblockedPluginClass[];
	shouldShutdownOnSignals?: boolean;
	sessionRegistry?: ISessionRegistry;
	disableSessionPersistence?: boolean;
}

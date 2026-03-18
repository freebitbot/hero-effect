import type Plugin from "../lib/Plugin";
import type PluginDelegate from "../lib/PluginDelegate";
import type SessionTracker from "../lib/SessionTracker";

export default interface IServerContext {
	readonly sessionTracker: SessionTracker;
	readonly pluginDelegate: PluginDelegate;
	readonly plugin: Plugin;
}

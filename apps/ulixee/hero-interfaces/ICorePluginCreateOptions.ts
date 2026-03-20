import type IEmulationProfile from "@ulixee/unblocked-specification/plugin/IEmulationProfile";
import type { PluginCustomConfig } from "@ulixee/unblocked-specification/plugin/IUnblockedPlugin";
import type { ISessionSummary } from "./ICorePlugin";
import type ICorePlugins from "./ICorePlugins";

export default interface ICorePluginCreateOptions<C extends object = any> {
	emulationProfile: IEmulationProfile;
	corePlugins: ICorePlugins;
	sessionSummary: ISessionSummary;
	// TODO: IBoundLog - logger: IBoundLog;
	customConfig?: PluginCustomConfig<C>;
}

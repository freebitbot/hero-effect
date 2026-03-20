import type ICorePlugin from "@ulixee/hero-interfaces/ICorePlugin";
import {
	CorePluginClassDecorator,
	type ICorePluginClass,
	type ISessionSummary,
} from "@ulixee/hero-interfaces/ICorePlugin";
import type ICorePluginCreateOptions from "@ulixee/hero-interfaces/ICorePluginCreateOptions";
import type ICorePlugins from "@ulixee/hero-interfaces/ICorePlugins";
import { PluginTypes } from "@ulixee/hero-interfaces/IPluginTypes";
import type IBrowserEngine from "@ulixee/unblocked-specification/agent/browser/IBrowserEngine";

@CorePluginClassDecorator
export default class CorePlugin implements ICorePlugin {
	public static id: string;
	public static type = PluginTypes.CorePlugin;

	public readonly id: string;
	public readonly sessionSummary: ISessionSummary;

	protected readonly browserEngine: IBrowserEngine;
	protected readonly plugins: ICorePlugins;

	constructor({
		emulationProfile,
		corePlugins,
		sessionSummary,
	}: ICorePluginCreateOptions) {
		this.id = (this.constructor as ICorePluginClass).id;
		this.browserEngine = emulationProfile.browserEngine;
		this.plugins = corePlugins;
		this.sessionSummary = sessionSummary ?? { id: undefined, options: {} };
	}
}

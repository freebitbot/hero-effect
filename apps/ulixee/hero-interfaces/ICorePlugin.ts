import type { IFrame } from "@ulixee/unblocked-specification/agent/browser/IFrame";
import type { IPage } from "@ulixee/unblocked-specification/agent/browser/IPage";

import type IEmulationProfile from "@ulixee/unblocked-specification/plugin/IEmulationProfile";
import type IUnblockedPlugin from "@ulixee/unblocked-specification/plugin/IUnblockedPlugin";
import type { PluginCustomConfig } from "@ulixee/unblocked-specification/plugin/IUnblockedPlugin";
import type ICorePluginCreateOptions from "./ICorePluginCreateOptions";
import type { PluginTypes } from "./IPluginTypes";
import type ISessionCreateOptions from "./ISessionCreateOptions";

export default interface ICorePlugin
	extends ICorePluginMethods,
		IUnblockedPlugin {
	id: string;
	readonly sessionSummary?: ISessionSummary;
}

export interface ICorePluginClass<C extends object = any> {
	id: string;
	type: keyof typeof PluginTypes;
	new (createOptions: ICorePluginCreateOptions): ICorePlugin;
	shouldActivate?(
		emulationProfile: IEmulationProfile<unknown>,
		sessionSummary: ISessionSummary,
		customConfig?: PluginCustomConfig<C>,
	): boolean;
}

export interface ICorePluginMethods {
	onClientCommand?(meta: IOnClientCommandMeta, ...args: any[]): Promise<any>;
}

export interface IOnClientCommandMeta {
	page: IPage;
	frame?: IFrame;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CorePluginClassDecorator(staticClass: ICorePluginClass): void {}

export interface ISessionSummary {
	id: string;
	options?: ISessionCreateOptions;
}

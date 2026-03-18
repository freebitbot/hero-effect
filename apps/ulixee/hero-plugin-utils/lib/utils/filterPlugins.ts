import type { IPluginClass } from "@ulixee/hero-interfaces/IPlugin";
import type { IPluginType } from "@ulixee/hero-interfaces/IPluginTypes";

export default function filterPlugins<T = IPluginClass>(
	Plugins: IPluginClass[],
	pluginType: IPluginType,
): T[] {
	return Plugins.filter((x) => x.type === pluginType) as unknown as T[];
}

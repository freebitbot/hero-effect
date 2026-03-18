import type IClientPlugin from "./IClientPlugin";
import type { IClientPluginClass } from "./IClientPlugin";
import type ICorePlugin from "./ICorePlugin";
import type { ICorePluginClass } from "./ICorePlugin";

type IPlugin = IClientPlugin | ICorePlugin;
export default IPlugin;

export type IPluginClass = IClientPluginClass | ICorePluginClass;

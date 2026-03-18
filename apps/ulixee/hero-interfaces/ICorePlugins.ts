import type ICorePlugin from "./ICorePlugin";
import type { ICorePluginClass } from "./ICorePlugin";

export default interface ICorePlugins extends Omit<ICorePlugin, "id"> {
	use(CorePlugin: ICorePluginClass): void;
}

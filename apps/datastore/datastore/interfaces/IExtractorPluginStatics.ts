import type IExtractorComponents from "./IExtractorComponents";
import type IExtractorContext from "./IExtractorContext";
import type IExtractorPlugin from "./IExtractorPlugin";
import type IExtractorRunOptions from "./IExtractorRunOptions";

export type IExtractorPluginConstructor<
	ISchema,
	IExtraAddons = object,
	TContextAddons = object,
	TComponentAddons = object,
> = {
	new (
		components?: IExtractorComponents<
			ISchema,
			IExtractorContext<ISchema> & TComponentAddons
		>,
	): IExtractorPlugin<
		ISchema,
		IExtractorRunOptions<ISchema> & IExtraAddons,
		IExtractorContext<ISchema> & TContextAddons
	>;
	readonly runArgAddons?: IExtraAddons;
	readonly componentAddons?: TContextAddons;
	readonly contextAddons?: TComponentAddons;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
export function ExtractorPluginStatics<ISchema>(
	staticClass: IExtractorPluginConstructor<ISchema>,
) {}

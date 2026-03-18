import type ExtractorInternal from "../lib/ExtractorInternal";
import type IExtractorContext from "./IExtractorContext";
import type IExtractorRunOptions from "./IExtractorRunOptions";
import type IExtractorSchema from "./IExtractorSchema";

export default interface IExtractorPlugin<
	ISchema extends IExtractorSchema,
	IOptions extends
		IExtractorRunOptions<ISchema> = IExtractorRunOptions<ISchema>,
	IContext extends IExtractorContext<ISchema> = IExtractorContext<ISchema>,
> {
	name: string;
	version: string;
	run(
		extractorInternal: ExtractorInternal<ISchema, IOptions>,
		context: IContext,
		next: () => Promise<IExtractorContext<ISchema>["outputs"]>,
	): Promise<void>;
}

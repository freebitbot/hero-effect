import type IBrowserEngineOption from "@ulixee/unblocked-specification/agent/browser/IBrowserEngineOption";
import { defaultBrowserEngine } from "../../index";
import type { IDataBrowserEngineOptions } from "../../interfaces/IBrowserData";

export default function selectBrowserEngineOption(
	browserEngineId: string,
	browserEngineOptions: IDataBrowserEngineOptions,
): IBrowserEngineOption {
	const browserEngineOption = browserEngineOptions.find(
		(x) => x.id === browserEngineId,
	);
	return (
		browserEngineOption ??
		browserEngineOptions.find((x) => x.id === defaultBrowserEngine.id)
	);
}

import { resolve } from "node:path";
import tsTransform from "@ulixee/commons/lib/BunTranspiler";
import { stringifiedTypeSerializerClass } from "@ulixee/commons/lib/TypeSerializer";
import type { TNewDocumentCallbackFn } from "@ulixee/unblocked-specification/agent/browser/IPage";
import type DevtoolsSession from "./DevtoolsSession";
import type FramesManager from "./FramesManager";

const pageScripts = {
	NodeTracker: tsTransform(
		resolve(__dirname, `../injected-scripts/NodeTracker.ts`),
	),

	jsPath: tsTransform(resolve(__dirname, `../injected-scripts/jsPath.ts`)),
	MouseEvents: tsTransform(
		resolve(__dirname, `../injected-scripts/MouseEvents.ts`),
	),
	PaintEvents: tsTransform(
		resolve(__dirname, `../injected-scripts/PaintEvents.ts`),
	),
};

const pageEventsCallbackName = "onPaintEvent";
export const injectedScript = `(function ulxInjectedScripts(callbackName) {
const exports = {}; // workaround for ts adding an exports variable
${stringifiedTypeSerializerClass};

${pageScripts.NodeTracker};
${pageScripts.jsPath};
${pageScripts.MouseEvents};
${pageScripts.PaintEvents};

window.TypeSerializer = TypeSerializer;
window.ULX = {
  JsPath,
  MouseEvents
};
})('${pageEventsCallbackName}');`.replaceAll(
	/# sourceMappingURL=.*\.js\.map/g,
	"",
);

export default class InjectedScripts {
	public static JsPath = `ULX.JsPath`;
	public static MouseEvents = `ULX.MouseEvents`;

	public static install(
		framesManager: FramesManager,
		devtoolsSession: DevtoolsSession,
		onPaintEvent: TNewDocumentCallbackFn,
	): Promise<any> {
		return Promise.all([
			framesManager.addNewDocumentScript(
				injectedScript,
				framesManager.page.installJsPathIntoIsolatedContext,
				{
					[pageEventsCallbackName]: onPaintEvent,
				},
				devtoolsSession,
			),
		]);
	}
}

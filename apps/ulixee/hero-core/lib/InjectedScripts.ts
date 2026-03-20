import { resolve } from "node:path";
import tsTransform from "@ulixee/commons/lib/BunTranspiler";
import { stringifiedTypeSerializerClass } from "@ulixee/commons/lib/TypeSerializer";
import type IDevtoolsSession from "@ulixee/unblocked-specification/agent/browser/IDevtoolsSession";
import type { IPage } from "@ulixee/unblocked-specification/agent/browser/IPage";

const pageScripts = {
	domStorage: tsTransform(
		resolve(__dirname, `../injected-scripts/domStorage.ts`),
	),
	indexedDbRestore: tsTransform(
		resolve(__dirname, `../injected-scripts/indexedDbRestore.ts`),
	),
	DomAssertions: tsTransform(
		resolve(__dirname, `../injected-scripts/DomAssertions.ts`),
	),
	Fetcher: tsTransform(resolve(__dirname, `../injected-scripts/Fetcher.ts`)),
	pageEventsRecorder: tsTransform(
		resolve(__dirname, `../injected-scripts/pageEventsRecorder.ts`),
	),
	shadowDomPiercer: tsTransform(
		resolve(__dirname, `../injected-scripts/domOverride_openShadowRoots.ts`),
	),
};
const pageEventsCallbackName = "paintEvents";

export const heroIncludes = `
const exports = {}; // workaround for ts adding an exports variable

${pageScripts.Fetcher};
${pageScripts.DomAssertions};

window.HERO = {
  Fetcher,
  DomAssertions,
};
`.replace(/# sourceMappingURL=.*\.js\.map/g, "");

const injectedScript = `(function installInjectedScripts() {
${heroIncludes}

(function installDomRecorder(callbackName) {
   ${pageScripts.pageEventsRecorder}
})('${pageEventsCallbackName}');

${pageScripts.domStorage}
})();`.replace(/# sourceMappingURL=.*\.js\.map/g, "");

const showInteractionScript = `(function installInteractionsScript() {
const exports = {}; // workaround for ts adding an exports variable

window.selfFrameIdPath = '';
if (!('blockClickAndSubmit' in window)) window.blockClickAndSubmit = false;

if (!('getNodeById' in window)) {
  window.getNodeById = function getNodeById(id) {
    if (id === null || id === undefined) return null;
    return NodeTracker.getWatchedNodeWithId(id, false);
  };
}

${pageScripts.interactReplayer};
})();`.replace(/# sourceMappingURL=.*\.js\.map/g, "");

const installedSymbol = Symbol("InjectedScripts.Installed");

export const CorePageInjectedScript = heroIncludes;

export default class InjectedScripts {
	public static Fetcher = `HERO.Fetcher`;
	public static PageEventsCallbackName = pageEventsCallbackName;
	public static ShadowDomPiercerScript = pageScripts.shadowDomPiercer;

	public static install(
		page: IPage,
		showInteractions = false,
		devtoolsSession?: IDevtoolsSession,
	): Promise<any> {
		if (devtoolsSession) {
			if (devtoolsSession[installedSymbol]) return;
			devtoolsSession[installedSymbol] = true;
		} else if (page[installedSymbol]) {
			return;
		}
		page[installedSymbol] = true;

		return Promise.all([
			page.addNewDocumentScript(
				injectedScript,
				true,
				{ [pageEventsCallbackName]: null },
				devtoolsSession,
			),
			showInteractions
				? page.addNewDocumentScript(
						showInteractionScript,
						true,
						null,
						devtoolsSession,
					)
				: null,
		]);
	}

	public static installInteractionScript(
		page: IPage,
		isolatedFromWebPage = true,
	): Promise<{ identifier: string }> {
		return page.addNewDocumentScript(
			showInteractionScript,
			isolatedFromWebPage,
		);
	}

	public static getIndexedDbStorageRestoreScript(): string {
		return `(function restoreIndexedDB() {
const exports = {}; // workaround for ts adding an exports variable
${stringifiedTypeSerializerClass};
${pageScripts.indexedDbRestore};
})();`;
	}
}

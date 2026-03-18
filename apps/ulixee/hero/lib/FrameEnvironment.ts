import AwaitedPath from "@ulixee/awaited-dom/base/AwaitedPath";
import type {
	IElementIsolate,
	IHTMLFrameElementIsolate,
	IHTMLIFrameElementIsolate,
	IHTMLObjectElementIsolate,
	INodeIsolate,
} from "@ulixee/awaited-dom/base/interfaces/isolate";
import type { IRequestInit } from "@ulixee/awaited-dom/base/interfaces/official";
import type {
	ISuperElement,
	ISuperNode,
	ISuperNodeList,
} from "@ulixee/awaited-dom/base/interfaces/super";
import StateMachine from "@ulixee/awaited-dom/base/StateMachine";
import {
	createCSSStyleDeclaration,
	createResponse,
	createStorage,
	createSuperDocument,
	createSuperNode,
	createSuperNodeList,
} from "@ulixee/awaited-dom/impl/create";
import type CSSStyleDeclaration from "@ulixee/awaited-dom/impl/official-klasses/CSSStyleDeclaration";
import type Request from "@ulixee/awaited-dom/impl/official-klasses/Request";
import type Response from "@ulixee/awaited-dom/impl/official-klasses/Response";
import type Storage from "@ulixee/awaited-dom/impl/official-klasses/Storage";
import XPathResult from "@ulixee/awaited-dom/impl/official-klasses/XPathResult";
import type SuperDocument from "@ulixee/awaited-dom/impl/super-klasses/SuperDocument";
import type { INodePointer } from "@ulixee/hero-interfaces/AwaitedDom";
import type IWaitForElementOptions from "@ulixee/hero-interfaces/IWaitForElementOptions";
import type IWaitForOptions from "@ulixee/hero-interfaces/IWaitForOptions";
import type { INodeVisibility } from "@ulixee/js-path";
import {
	type ILoadStatus,
	type ILocationTrigger,
	LocationStatus,
} from "@ulixee/unblocked-specification/agent/browser/Location";
import type { IMousePositionXY } from "@ulixee/unblocked-specification/agent/interact/IInteractions";
import type IAwaitedOptions from "../interfaces/IAwaitedOptions";
import type CookieStorage from "./CookieStorage";
import { createCookieStorage } from "./CookieStorage";
import type CoreFrameEnvironment from "./CoreFrameEnvironment";
import type Hero from "./Hero";
import { InternalPropertiesSymbol } from "./internal";
import RequestGenerator, { getRequestIdOrUrl } from "./Request";
import type Resource from "./Resource";
import { createResource } from "./Resource";
import { getAwaitedPathAsMethodArg } from "./SetupAwaitedHandler";
import type Tab from "./Tab";
import { getCoreTab } from "./Tab";

const awaitedPathState = StateMachine<
	any,
	{
		awaitedPath: AwaitedPath;
		awaitedOptions: IAwaitedOptions;
		nodePointer?: INodePointer;
	}
>();

interface ISharedInternalProperties {
	coreFramePromise: Promise<CoreFrameEnvironment>;
}

export default class FrameEnvironment {
	#hero: Hero;
	#tab: Tab;
	#coreFramePromise: Promise<CoreFrameEnvironment>;

	get [InternalPropertiesSymbol](): ISharedInternalProperties {
		return {
			coreFramePromise: this.#coreFramePromise,
		};
	}

	constructor(
		hero: Hero,
		tab: Tab,
		coreFramePromise: Promise<CoreFrameEnvironment>,
	) {
		this.#hero = hero;
		this.#tab = tab;
		this.#coreFramePromise = coreFramePromise;

		async function sendToFrameEnvironment(
			pluginId: string,
			...args: any[]
		): Promise<any> {
			return (await coreFramePromise).commandQueue.run(
				"FrameEnvironment.runPluginCommand",
				pluginId,
				args,
			);
		}

		for (const clientPlugin of hero[InternalPropertiesSymbol].clientPlugins) {
			if (clientPlugin.onFrameEnvironment)
				clientPlugin.onFrameEnvironment(hero, this, sendToFrameEnvironment);
		}
	}

	public get isMainFrame(): Promise<boolean> {
		return this.parentFrameId.then((x) => !x);
	}

	public get frameId(): Promise<number> {
		return this.#coreFramePromise.then((x) => x.frameId);
	}

	public get children(): Promise<FrameEnvironment[]> {
		return this.#tab.frameEnvironments.then(async (frames) => {
			const frameId = await this.frameId;

			const childFrames: FrameEnvironment[] = [];
			for (const frame of frames) {
				const parentFrameId = await frame.parentFrameId;
				if (parentFrameId === frameId) {
					childFrames.push(frame);
				}
			}
			return childFrames;
		});
	}

	public get url(): Promise<string> {
		return this.#coreFramePromise.then((x) => x.getUrl());
	}

	public get isPaintingStable(): Promise<boolean> {
		return this.#coreFramePromise.then((x) => x.isPaintingStable());
	}

	public get isDomContentLoaded(): Promise<boolean> {
		return this.#coreFramePromise.then((x) => x.isDomContentLoaded());
	}

	public get isAllContentLoaded(): Promise<boolean> {
		return this.#coreFramePromise.then((x) => x.isAllContentLoaded());
	}

	public get name(): Promise<string> {
		return this.#coreFramePromise
			.then((x) => x.getFrameMeta())
			.then((x) => x.name);
	}

	public get parentFrameId(): Promise<number | null> {
		return this.#coreFramePromise.then((x) => x.parentFrameId);
	}

	public get cookieStorage(): CookieStorage {
		return createCookieStorage(this.#coreFramePromise);
	}

	public get document(): SuperDocument {
		const awaitedPath = new AwaitedPath(null, "document");
		const awaitedOptions = { coreFrame: this.#coreFramePromise };
		return createSuperDocument<IAwaitedOptions>(
			awaitedPath,
			awaitedOptions,
		) as SuperDocument;
	}

	public get localStorage(): Storage {
		const awaitedPath = new AwaitedPath(null, "localStorage");
		const awaitedOptions = { coreFrame: this.#coreFramePromise };
		return createStorage<IAwaitedOptions>(
			awaitedPath,
			awaitedOptions,
		) as Storage;
	}

	public get sessionStorage(): Storage {
		const awaitedPath = new AwaitedPath(null, "sessionStorage");
		const awaitedOptions = { coreFrame: this.#coreFramePromise };
		return createStorage<IAwaitedOptions>(
			awaitedPath,
			awaitedOptions,
		) as Storage;
	}

	public get Request(): typeof Request {
		return RequestGenerator(this.#coreFramePromise);
	}

	// METHODS

	public async fetch(
		request: Request | string,
		init?: IRequestInit,
	): Promise<Response> {
		const requestInput = await getRequestIdOrUrl(request);
		const coreFrame = await this.#coreFramePromise;
		const nodePointer = await coreFrame.fetch(requestInput, init);

		const awaitedPath = new AwaitedPath(null).withNodeId(null, nodePointer.id);
		return createResponse(awaitedPath, { coreFrame: this.#coreFramePromise });
	}

	public async getFrameEnvironment(
		element:
			| IHTMLFrameElementIsolate
			| IHTMLIFrameElementIsolate
			| IHTMLObjectElementIsolate,
	): Promise<FrameEnvironment | null> {
		return await this.#tab.getFrameEnvironment(element);
	}

	public getComputedStyle(
		element: IElementIsolate,
		pseudoElement?: string,
	): CSSStyleDeclaration {
		const { awaitedPath: elementAwaitedPath, awaitedOptions } =
			awaitedPathState.getState(element);
		const awaitedPath = new AwaitedPath(null, "window", [
			"getComputedStyle",
			getAwaitedPathAsMethodArg(elementAwaitedPath),
			pseudoElement,
		]);
		return createCSSStyleDeclaration<IAwaitedOptions>(
			awaitedPath,
			awaitedOptions,
		) as CSSStyleDeclaration;
	}

	public async getComputedVisibility(
		node: INodeIsolate,
	): Promise<INodeVisibility> {
		if (!node)
			return { isVisible: false, nodeExists: false, isClickable: false };
		const coreFrame = await this.#coreFramePromise;
		return await coreFrame.getComputedVisibility(node);
	}

	// @deprecated 2021-04-30: Replaced with getComputedVisibility
	public async isElementVisible(element: IElementIsolate): Promise<boolean> {
		return await this.getComputedVisibility(element as any).then(
			(x) => x.isVisible,
		);
	}

	public async getJsValue<T>(path: string): Promise<T> {
		const coreFrame = await this.#coreFramePromise;
		return coreFrame.getJsValue<T>(path);
	}

	public querySelector(selector: string): ISuperNode {
		const awaitedPath = new AwaitedPath(null, "document", [
			"querySelector",
			selector,
		]);
		const awaitedOptions: IAwaitedOptions = {
			coreFrame: this.#coreFramePromise,
		};
		return createSuperNode(awaitedPath, awaitedOptions);
	}

	public querySelectorAll(selector: string): ISuperNodeList {
		const awaitedPath = new AwaitedPath(null, "document", [
			"querySelectorAll",
			selector,
		]);
		const awaitedOptions: IAwaitedOptions = {
			coreFrame: this.#coreFramePromise,
		};
		return createSuperNodeList(awaitedPath, awaitedOptions);
	}

	public xpathSelector(xpath: string, orderedNodeResults = false): ISuperNode {
		return this.document.evaluate(
			xpath,
			this.document,
			null,
			orderedNodeResults
				? XPathResult.FIRST_ORDERED_NODE_TYPE
				: XPathResult.ANY_UNORDERED_NODE_TYPE,
		).singleNodeValue;
	}

	public async xpathSelectorAll(
		xpath: string,
		orderedNodeResults = false,
	): Promise<ISuperNode[]> {
		const results = await this.document.evaluate(
			xpath,
			this.document,
			null,
			orderedNodeResults
				? XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
				: XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		);
		const nodeLength = await results.snapshotLength;
		const nodes: ISuperNode[] = [];
		for (let i = 0; i < nodeLength; i++) {
			nodes.push(results.snapshotItem(i));
		}
		return nodes;
	}

	public async waitForPaintingStable(options?: IWaitForOptions): Promise<void> {
		const coreFrame = await this.#coreFramePromise;
		await coreFrame.waitForLoad(LocationStatus.PaintingStable, options);
	}

	public async waitForLoad(
		status: ILoadStatus,
		options?: IWaitForOptions,
	): Promise<void> {
		const coreFrame = await this.#coreFramePromise;
		await coreFrame.waitForLoad(status, options);
	}

	public async waitForElement(
		element: ISuperElement,
		options?: IWaitForElementOptions,
	): Promise<ISuperElement | null> {
		const coreFrame = await this.#coreFramePromise;
		return await coreFrame.waitForElement(element, options);
	}

	public async waitForLocation(
		trigger: ILocationTrigger,
		options?: IWaitForOptions,
	): Promise<Resource> {
		const coreFrame = await this.#coreFramePromise;
		const resourceMeta = await coreFrame.waitForLocation(trigger, options);
		const coreTab = getCoreTab(this.#tab);
		return createResource(coreTab, resourceMeta);
	}

	public toJSON(): any {
		// return empty so we can avoid infinite "stringifying" in jest
		return {
			type: this.constructor.name,
		};
	}
}

export function getCoreFrameEnvironmentForPosition(
	mousePosition: IMousePositionXY | ISuperElement,
): Promise<CoreFrameEnvironment> {
	const state = awaitedPathState.getState(mousePosition);
	if (!state) return;
	return state?.awaitedOptions?.coreFrame;
}

// CREATE

export function createFrame(
	hero: Hero,
	tab: Tab,
	coreFrame: Promise<CoreFrameEnvironment>,
): FrameEnvironment {
	return new FrameEnvironment(hero, tab, coreFrame);
}

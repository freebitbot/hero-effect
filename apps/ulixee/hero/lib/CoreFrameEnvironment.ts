import type AwaitedPath from "@ulixee/awaited-dom/base/AwaitedPath";
import type {
	IElementIsolate,
	INodeIsolate,
} from "@ulixee/awaited-dom/base/interfaces/isolate";
import type { IRequestInit } from "@ulixee/awaited-dom/base/interfaces/official";
import type { ISuperElement } from "@ulixee/awaited-dom/base/interfaces/super";
import StateMachine from "@ulixee/awaited-dom/base/StateMachine";
import TimeoutError from "@ulixee/commons/interfaces/TimeoutError";
import type IDetachedElement from "@ulixee/hero-interfaces/IDetachedElement";
import type IFrameMeta from "@ulixee/hero-interfaces/IFrameMeta";
import type ISessionMeta from "@ulixee/hero-interfaces/ISessionMeta";
import type ISetCookieOptions from "@ulixee/hero-interfaces/ISetCookieOptions";
import type IWaitForElementOptions from "@ulixee/hero-interfaces/IWaitForElementOptions";
import type IWaitForOptions from "@ulixee/hero-interfaces/IWaitForOptions";
import type { IJsPath, INodePointer, INodeVisibility } from "@ulixee/js-path";
import type IExecJsPathResult from "@ulixee/unblocked-specification/agent/browser/IExecJsPathResult";
import {
	getComputedVisibilityFnName,
	isFocusedFnName,
} from "@ulixee/unblocked-specification/agent/browser/IJsPathFunctions";
import type {
	ILoadStatus,
	ILocationTrigger,
} from "@ulixee/unblocked-specification/agent/browser/Location";
import {
	type IInteractionGroups,
	isMousePositionXY,
} from "@ulixee/unblocked-specification/agent/interact/IInteractions";
import type { ICookie } from "@ulixee/unblocked-specification/agent/net/ICookie";
import type IResourceMeta from "@ulixee/unblocked-specification/agent/net/IResourceMeta";
import type IAwaitedOptions from "../interfaces/IAwaitedOptions";
import type CoreCommandQueue from "./CoreCommandQueue";
import type CoreTab from "./CoreTab";
import {
	delegate as AwaitedHandler,
	convertJsPathArgs,
	createInstanceWithNodePointer,
} from "./SetupAwaitedHandler";

const awaitedPathState = StateMachine<
	any,
	{
		awaitedPath: AwaitedPath;
		awaitedOptions: IAwaitedOptions;
		nodePointer?: INodePointer;
	}
>();

export default class CoreFrameEnvironment {
	public tabId: number;
	public frameId: number;
	public sessionId: string;
	public commandQueue: CoreCommandQueue;
	public parentFrameId: number;
	public coreTab: CoreTab;

	constructor(
		coreTab: CoreTab,
		meta: ISessionMeta & { sessionName: string },
		parentFrameId?: number,
	) {
		const { tabId, sessionId, frameId, sessionName } = meta;
		this.tabId = tabId;
		this.coreTab = coreTab;
		this.sessionId = sessionId;
		this.frameId = frameId;
		this.parentFrameId = parentFrameId;
		const queueMeta = {
			sessionId,
			tabId,
			sessionName,
			frameId,
		};
		this.commandQueue = coreTab.commandQueue.createSharedQueue(queueMeta);
	}

	public async getFrameMeta(): Promise<IFrameMeta> {
		return await this.commandQueue.run("FrameEnvironment.meta");
	}

	public async getChildFrameEnvironment(jsPath: IJsPath): Promise<IFrameMeta> {
		return await this.commandQueue.run(
			"FrameEnvironment.getChildFrameEnvironment",
			jsPath,
		);
	}

	public async execJsPath<T = any>(
		jsPath: IJsPath,
	): Promise<IExecJsPathResult<T>> {
		return await this.commandQueue.run("FrameEnvironment.execJsPath", jsPath);
	}

	public async getJsValue<T>(expression: string): Promise<T> {
		return await this.commandQueue.run(
			"FrameEnvironment.getJsValue",
			expression,
		);
	}

	public async fetch(
		request: string | number,
		init?: IRequestInit,
	): Promise<INodePointer> {
		return await this.commandQueue.run("FrameEnvironment.fetch", request, init);
	}

	public async createRequest(
		input: string | number,
		init?: IRequestInit,
	): Promise<INodePointer> {
		return await this.commandQueue.run(
			"FrameEnvironment.createRequest",
			input,
			init,
		);
	}

	public async detachElement(
		name: string,
		jsPath: IJsPath,
		waitForElement = false,
		saveToDb = true,
	): Promise<IDetachedElement[]> {
		return await this.commandQueue.run(
			"FrameEnvironment.detachElement",
			name,
			jsPath,
			Date.now(),
			waitForElement,
			saveToDb,
		);
	}

	public async getUrl(): Promise<string> {
		return await this.commandQueue.run("FrameEnvironment.getUrl");
	}

	public async isPaintingStable(): Promise<boolean> {
		return await this.commandQueue.run("FrameEnvironment.isPaintingStable");
	}

	public async isDomContentLoaded(): Promise<boolean> {
		return await this.commandQueue.run("FrameEnvironment.isDomContentLoaded");
	}

	public async isAllContentLoaded(): Promise<boolean> {
		return await this.commandQueue.run("FrameEnvironment.isAllContentLoaded");
	}

	public async interact(interactionGroups: IInteractionGroups): Promise<void> {
		for (const interactionGroup of interactionGroups) {
			for (const interactionStep of interactionGroup) {
				if (
					interactionStep.mousePosition &&
					!isMousePositionXY(interactionStep.mousePosition)
				) {
					convertJsPathArgs(interactionStep.mousePosition);
				}
			}
		}
		await this.commandQueue.run(
			"FrameEnvironment.interact",
			...interactionGroups,
		);
	}

	public async getComputedVisibility(
		node: INodeIsolate,
	): Promise<INodeVisibility> {
		return await AwaitedHandler.runMethod(
			awaitedPathState,
			node,
			getComputedVisibilityFnName,
			[],
		);
	}

	public async isFocused(element: IElementIsolate): Promise<boolean> {
		return await AwaitedHandler.runMethod(
			awaitedPathState,
			element,
			isFocusedFnName,
			[],
		);
	}

	public async getNodePointer(node: INodeIsolate): Promise<INodePointer> {
		return await AwaitedHandler.createNodePointer(awaitedPathState, node);
	}

	public async getCookies(): Promise<ICookie[]> {
		return await this.commandQueue.run("FrameEnvironment.getCookies");
	}

	public async setCookie(
		name: string,
		value: string,
		options?: ISetCookieOptions,
	): Promise<boolean> {
		return await this.commandQueue.run(
			"FrameEnvironment.setCookie",
			name,
			value,
			options,
		);
	}

	public async removeCookie(name: string): Promise<boolean> {
		return await this.commandQueue.run("FrameEnvironment.removeCookie", name);
	}

	public async setFileInputFiles(
		jsPath: IJsPath,
		files: { name: string; data: Buffer }[],
	): Promise<void> {
		return await this.commandQueue.run(
			"FrameEnvironment.setFileInputFiles",
			jsPath,
			files,
		);
	}

	public async waitForElement(
		element: ISuperElement,
		options: IWaitForElementOptions,
	): Promise<ISuperElement> {
		if (!element) throw new Error("Element being waited for is null");
		const { waitForVisible, waitForHidden, waitForClickable, timeoutMs } =
			options ?? {};
		try {
			await this.coreTab.waitForState(
				{
					all(assert) {
						if (waitForVisible) assert(element.$isVisible);
						else if (waitForClickable) assert(element.$isClickable);
						else if (waitForHidden) assert(element.$isVisible, false);
						else assert(element.$exists);
					},
				},
				{ timeoutMs },
			);
		} catch (error) {
			if (error instanceof TimeoutError) {
				let state: string;
				if (waitForHidden) state = "be hidden";
				else if (waitForClickable) state = "be clickable";
				else if (waitForVisible) state = "be visible";
				else state = "exist";
				const message = error.message;
				error.message = `Timeout waiting for element to ${state}`;
				error.stack = error.stack.replace(message, error.message);
				throw error;
			}
			throw error;
		}

		const nodePointer = await this.getNodePointer(element);
		if (!nodePointer) return null;
		const { awaitedOptions, awaitedPath } = awaitedPathState.getState(element);

		return createInstanceWithNodePointer(
			awaitedPathState,
			awaitedPath,
			awaitedOptions,
			nodePointer,
		);
	}

	public async waitForLoad(
		status: ILoadStatus,
		opts: IWaitForOptions,
	): Promise<void> {
		await this.commandQueue.run("FrameEnvironment.waitForLoad", status, opts);
	}

	public async waitForLocation(
		trigger: ILocationTrigger,
		opts: IWaitForOptions,
	): Promise<IResourceMeta> {
		return await this.commandQueue.run(
			"FrameEnvironment.waitForLocation",
			trigger,
			opts,
		);
	}
}

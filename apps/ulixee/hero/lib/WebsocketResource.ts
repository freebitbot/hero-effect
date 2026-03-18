import AwaitedPath from "@ulixee/awaited-dom/base/AwaitedPath";
import type IWebsocketMessage from "@ulixee/hero-interfaces/IWebsocketMessage";
import type IResourceMeta from "@ulixee/unblocked-specification/agent/net/IResourceMeta";
import type IResourceType from "@ulixee/unblocked-specification/agent/net/IResourceType";
import AwaitedEventTarget from "./AwaitedEventTarget";
import type CoreTab from "./CoreTab";
import DetachedResource from "./DetachedResource";
import { InternalPropertiesSymbol } from "./internal";
import type ResourceRequest from "./ResourceRequest";
import { createResourceRequest } from "./ResourceRequest";
import type ResourceResponse from "./ResourceResponse";
import { createResourceResponse } from "./ResourceResponse";

interface IEventType {
	message: (message: IWebsocketMessage) => void;
}

const subscribeErrorMessage = `Websocket responses do not have a body. To retrieve messages, subscribe to events: on('message', ...)`;

export default class WebsocketResource extends AwaitedEventTarget<IEventType> {
	public readonly url: string;
	public readonly documentUrl: string;
	public readonly type = "Websocket" as IResourceType;
	public readonly isRedirect: boolean;
	public readonly request: ResourceRequest;
	public readonly response: ResourceResponse;

	#awaitedPath: AwaitedPath;
	readonly #coreTabPromise: Promise<CoreTab>;
	readonly #resourceMeta: IResourceMeta;

	get [InternalPropertiesSymbol](): {
		coreTabPromise: Promise<CoreTab>;
		resourceMeta: IResourceMeta;
	} {
		return {
			coreTabPromise: this.#coreTabPromise,
			resourceMeta: this.#resourceMeta,
		};
	}

	constructor(coreTabPromise: Promise<CoreTab>, resourceMeta: IResourceMeta) {
		super(() => {
			return {
				target: this.#coreTabPromise,
				jsPath: this.#awaitedPath.toJSON(),
			};
		});
		this.request = createResourceRequest(coreTabPromise, resourceMeta);
		this.response = createResourceResponse(coreTabPromise, resourceMeta);
		this.#awaitedPath = new AwaitedPath(
			null,
			"resources",
			String(resourceMeta.id),
		);
		this.#coreTabPromise = coreTabPromise;
		this.#resourceMeta = resourceMeta;
		this.url = resourceMeta.url;
		this.documentUrl = resourceMeta.documentUrl;
		this.isRedirect = resourceMeta.isRedirect ?? false;
	}

	public get messages(): Promise<IWebsocketMessage[]> {
		const resource = this.#resourceMeta;
		if ("messages" in resource) {
			return Promise.resolve((resource as any).messages as IWebsocketMessage[]);
		}
		return this.#coreTabPromise.then((x) =>
			x.getResourceProperty(resource.id, "messages"),
		);
	}

	public get buffer(): Promise<Buffer> {
		throw new Error(subscribeErrorMessage);
	}

	public get text(): Promise<string> {
		throw new Error(subscribeErrorMessage);
	}

	public get json(): Promise<any> {
		throw new Error(subscribeErrorMessage);
	}

	public async $detach(): Promise<DetachedResource> {
		const resource = await this.#coreTabPromise.then((x) =>
			x.detachResource(undefined, this.#resourceMeta.id),
		);
		return new DetachedResource(resource);
	}

	public async $addToDetachedResources(name: string): Promise<void> {
		await this.#coreTabPromise.then((x) =>
			x.detachResource(name, this.#resourceMeta.id),
		);
		return undefined;
	}
}

export function createWebsocketResource(
	resourceMeta: IResourceMeta,
	coreTab: Promise<CoreTab>,
): WebsocketResource {
	return new WebsocketResource(coreTab, resourceMeta);
}

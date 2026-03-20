import EventSubscriber from "@ulixee/commons/lib/EventSubscriber";
import Resolvable from "@ulixee/commons/lib/Resolvable";
import * as WebSocket from "ws";
import type IConnectionTransport from "../interfaces/IConnectionTransport";

export class WebsocketTransport implements IConnectionTransport {
	public get url(): string {
		return this.webSocket.url;
	}

	public onMessageFn: (message: string) => void;
	public readonly onCloseFns: (() => void)[] = [];
	public connectedPromise = new Resolvable<void>();
	public isClosed = false;

	private events = new EventSubscriber();
	private webSocket?: WebSocket;

	constructor(urlPromise: Promise<string>) {
		urlPromise
			.then((url) => this.connect(url))
			.catch((error) => {
				if (!this.connectedPromise.isResolved)
					this.connectedPromise.reject(error);
			});
	}

	send(message: string): boolean {
		if (this.webSocket?.readyState === WebSocket.OPEN) {
			this.webSocket.send(message);
			return true;
		}
		return false;
	}

	close(): void {
		this.isClosed = true;
		this.events.close();
		try {
			this.webSocket?.close();
		} catch {}
	}

	private onClosed(): void {
		console.log("[WebsocketTransport]", { action: "Closed" });
		for (const close of this.onCloseFns) close();
	}

	private onMessage(event: string): void {
		this.onMessageFn?.(event);
	}

	private connect(url: string): void {
		url = url.replace("localhost", "127.0.0.1");
		this.webSocket = new WebSocket(url, [], {
			perMessageDeflate: false,
			followRedirects: true,
		});
		this.webSocket.once("open", this.connectedPromise.resolve);
		this.webSocket.once("error", (err) =>
			this.connectedPromise.reject(err, true),
		);
		this.events.on(this.webSocket, "message", this.onMessage.bind(this));
		this.events.once(this.webSocket, "close", this.onClosed.bind(this));
		this.events.once(this.webSocket, "error", (error) => {
			if (!this.connectedPromise.isResolved)
				this.connectedPromise.reject(error, true);
			if (this.isClosed) return;
			if (error.code !== "EPIPE") {
				console.log("[WebsocketTransport]", { action: "error", error });
			}
		});
	}
}

import type MitmSocket from "..";
import BaseIpcHandler, { type IGoIpcOpts } from "./BaseIpcHandler";

export default class MitmSocketSession extends BaseIpcHandler {
	private readonly socketsById = new Map<number, MitmSocket>();

	constructor(options: IGoIpcOpts) {
		super({ ...options, mode: "proxy" });
	}

	public async requestSocket(socket: MitmSocket): Promise<void> {
		const id = socket.id;
		this.socketsById.set(id, socket);

		socket.once("close", () => this.socketsById.delete(id));

		await this.waitForConnected;

		try {
			await this.sendIpcMessage({
				id,
				socketPath: socket.socketPath,
				...socket.connectOpts,
			});
		} catch (error) {
			if (this.isClosing) {
				return null;
			}
			console.log("[MitmSocketSession]", "MitmSocketSession.requestSocketError", {
				error,
			});
		}
	}

	protected onMessage(rawMessage: string): void {
		if (this.isClosing) return;
		const message = JSON.parse(rawMessage);
		if (this.options.debug) {
			console.log("[MitmSocketSession]", "MitmSocketSession.onMessage", {
				...message,
			});
		}
		if (message?.id) {
			this.socketsById.get(message.id)?.onMessage(message);
		}
	}

	protected beforeExit(): void {
		for (const socket of this.socketsById.values()) {
			socket.onExit();
		}
		this.socketsById.clear();
	}
}

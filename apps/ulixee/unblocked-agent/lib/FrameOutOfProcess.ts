import { CanceledPromiseError } from "@ulixee/commons/interfaces/IPendingWaitEvent";
import type BrowserContext from "./BrowserContext";
import type DevtoolsSession from "./DevtoolsSession";
import DomStorageTracker from "./DomStorageTracker";
import type Frame from "./Frame";
import NetworkManager from "./NetworkManager";
import type Page from "./Page";

export default class FrameOutOfProcess {
	public page: Page;
	public frame: Frame;
	public devtoolsSession: DevtoolsSession;

	private networkManager: NetworkManager;
	private domStorageTracker: DomStorageTracker;
	private get browserContext(): BrowserContext {
		return this.page.browserContext;
	}

	constructor(page: Page, frame: Frame) {
		this.devtoolsSession = frame.devtoolsSession;
		this.page = page;
		this.frame = frame;
		this.networkManager = new NetworkManager(
			this.devtoolsSession,
			frame.logger,
			page.browserContext.proxy,
			page.browserContext.secretKey,
		);
		this.domStorageTracker = new DomStorageTracker(
			page,
			page.browserContext.domStorage,
			this.networkManager,
			page.logger,
			page.domStorageTracker.isEnabled,
			this.devtoolsSession,
		);
	}

	public async initialize(): Promise<void> {
		this.page.bindSessionEvents(this.devtoolsSession);
		const results = await Promise.all([
			this.networkManager
				.initializeFromParent(this.page.networkManager)
				.catch((err) => err),
			this.page.framesManager
				.initialize(this.devtoolsSession)
				.catch((err) => err),
			this.domStorageTracker.initialize().catch((err) => err),
			this.devtoolsSession
				.send("Target.setAutoAttach", {
					autoAttach: true,
					waitForDebuggerOnStart: true,
					flatten: true,
				})
				.catch((err) => err),
			this.browserContext
				.initializeOutOfProcessIframe(this)
				.catch((err) => err),
			this.devtoolsSession
				.send("Runtime.runIfWaitingForDebugger")
				.catch((err) => err),
		]);

		for (const error of results) {
			if (error && error instanceof Error) {
				if (error instanceof CanceledPromiseError) continue;
				throw error;
			}
		}
	}
}

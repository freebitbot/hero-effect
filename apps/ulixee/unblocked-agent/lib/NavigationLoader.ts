import Resolvable from "@ulixee/commons/lib/Resolvable";
import type {
	ILifecycleEvents,
	INavigationLoader,
} from "@ulixee/unblocked-specification/agent/browser/IFrame";

export class NavigationLoader {
	public get isNavigationComplete(): boolean {
		return this.navigationResolver.isResolved;
	}

	public readonly lifecycle: ILifecycleEvents = {};
	public navigationResolver = new Resolvable<Error | string>();
	public url: string;

	private afterStoppedLoadingTimeout: NodeJS.Timeout;
	// @ts-expect-error IBoundLog deprecated
	private logger;

	constructor(
		readonly id: string,
		// @ts-expect-error IBoundLog deprecated
		logger,
	) {
		this.logger = logger.createChild(module, {
			loaderId: this.id,
		});
	}

	public setNavigationResult(result?: Error | string): void {
		this.navigationResolver.resolve(result ?? null);
		if (result && typeof result === "string") {
			this.url = result;
		}
	}

	public clearStoppedLoading(): void {
		clearTimeout(this.afterStoppedLoadingTimeout);
	}

	public onStoppedLoading(): void {
		clearTimeout(this.afterStoppedLoadingTimeout);

		this.afterStoppedLoadingTimeout = setTimeout(
			this.markLoaded.bind(this),
			50,
		).unref();
	}

	public onLifecycleEvent(name: string): void {
		if (
			(name === "commit" || name === "DOMContentLoaded" || name === "load") &&
			!this.isNavigationComplete
		) {
			this.logger.info("Resolving loader on lifecycle", {
				lifecycleEvent: name,
			});
			this.clearStoppedLoading();
			this.setNavigationResult();
		}

		this.lifecycle[name] ??= new Date();
	}

	public markLoaded(): void {
		if (!this.lifecycle.load) {
			this.onLifecycleEvent("DOMContentLoaded");
			this.onLifecycleEvent("load");
		}
	}

	public toJSON(): INavigationLoader {
		return {
			id: this.id,
			isNavigationComplete: this.isNavigationComplete,
			lifecycle: this.lifecycle,
			url: this.url,
		};
	}
}

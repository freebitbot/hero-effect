import UlixeeHostsConfig from "@ulixee/commons/config/hosts";
import Resolvable from "@ulixee/commons/lib/Resolvable";
import ShutdownHandler from "@ulixee/commons/lib/ShutdownHandler";
import { bindFunctions, isPortInUse } from "@ulixee/commons/lib/utils";
import HeroCore from "@ulixee/hero-core";
import type ICoreConfigureOptions from "@ulixee/hero-interfaces/ICoreConfigureOptions";
import Env from "../env";
import type ICloudConfiguration from "../interfaces/ICloudConfiguration";
import pkg from "../package.json";
import CoreRouter from "./CoreRouter";
import RoutableServer from "./RoutableServer";

const isTestEnv = process.env.NODE_ENV === "test";

export default class CloudNode {
	public publicServer!: RoutableServer;
	public heroCore!: HeroCore;

	public readonly shouldShutdownOnSignals: boolean = true;
	public readonly router: CoreRouter;

	public heroConfiguration!: ICoreConfigureOptions;

	public cloudConfiguration: ICloudConfiguration = {
		port: Env.publicPort ? Number(Env.publicPort) : undefined,
		host: Env.listenHostname,
		publicHost: Env.publicHost,
	};

	public get port(): Promise<number> {
		return this.publicServer.port;
	}

	public get host(): Promise<string> {
		return this.publicServer.host;
	}

	// @deprecated - use host
	public get address(): Promise<string> {
		return this.publicServer.host;
	}

	public get version(): string {
		return pkg.version;
	}

	private isClosing!: Promise<any>;
	private isStarting!: Resolvable<this>;
	private isReady = new Resolvable<void>();
	private didReservePort = false;

	constructor(
		config: Partial<ICloudConfiguration> & {
			shouldShutdownOnSignals?: boolean;
			heroConfiguration?: Partial<ICoreConfigureOptions>;
		} = { shouldShutdownOnSignals: true },
	) {
		bindFunctions(this);

		const {
			heroConfiguration,
			shouldShutdownOnSignals,
			...cloudConfiguration
		} = config;

		Object.assign(this.cloudConfiguration, cloudConfiguration ?? {});

		this.router = new CoreRouter(this);

		this.shouldShutdownOnSignals = shouldShutdownOnSignals ?? true;
		this.heroConfiguration = heroConfiguration ?? {};
		this.heroConfiguration.shouldShutdownOnSignals ??=
			this.shouldShutdownOnSignals;
		this.heroCore = new HeroCore(this.heroConfiguration);

		if (!this.shouldShutdownOnSignals) ShutdownHandler.disableSignals = true;
		ShutdownHandler.register(this.close);
	}

	public async listen(): Promise<this> {
		if (this.isStarting) return this.isStarting;
		this.isStarting = new Resolvable<this>();

		try {
			await this.startPublicServer();

			await this.startCores();
			// NOTE: must wait for cores to be available
			await this.router.register();
			// wait until router is registered before accepting traffic
			this.isReady.resolve();
		} finally {
			this.isStarting.resolve(this);
			console.log("[CloudNode]", {
				action: "started",
				publicHost: await this.publicServer.host,
				cloudConfiguration: this.cloudConfiguration,
			});
		}
		return this;
	}

	public async close(): Promise<void> {
		if (this.isClosing) {
			return this.isClosing;
		}
		const resolvable = new Resolvable<void>();
		console.log("[CloudNode]", { action: "Closing" });
		try {
			this.isClosing = resolvable.promise;

			ShutdownHandler.unregister(this.close);
			this.heroCore.off("close", this.close);

			if (this.didReservePort) {
				this.clearReservedPort();
			}

			await this.router.close();

			await this.heroCore.close();

			await this.publicServer.close();
			resolvable.resolve();
		} catch (error: any) {
			console.error("[CloudNode]", {
				action: "Error closing socket connections",
				error,
			});
			resolvable.reject(error);
		} finally {
			console.log("[CloudNode]", { action: "Closed" });
		}
		return resolvable.promise;
	}

	private async startCores(): Promise<void> {
		await this.heroCore.start();
		this.heroCore.once("close", this.close);
	}

	private async startPublicServer(): Promise<string> {
		const listenOptions = this.cloudConfiguration;

		this.publicServer = new RoutableServer(
			this.isReady.promise,
			listenOptions.publicHost,
		);
		const isPortUnreserved = !listenOptions.port;
		if (isPortUnreserved && !isTestEnv) {
			if (!(await isPortInUse(1818))) listenOptions.port = 1818;
		}
		const { address, port } = await this.publicServer.listen(listenOptions);
		// if we're dealing with local or no configuration, set the local version host
		if (isLocalhost(address) && isPortUnreserved && !isTestEnv) {
			// publish port with the version
			UlixeeHostsConfig.global.setVersionHost(
				this.version,
				`localhost:${port}`,
			);
			this.didReservePort = true;
			ShutdownHandler.register(this.clearReservedPort, true);
		}
		return await this.publicServer.host;
	}

	private clearReservedPort(): void {
		UlixeeHostsConfig.global.setVersionHost(this.version, null);
	}
}

function isLocalhost(address: string): boolean {
	return (
		address === "127.0.0.1" ||
		address === "localhost" ||
		address === "::" ||
		address === "::1"
	);
}

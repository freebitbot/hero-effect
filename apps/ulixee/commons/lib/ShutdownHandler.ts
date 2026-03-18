import { CanceledPromiseError } from "../interfaces/IPendingWaitEvent";
import logger from "./Logger";

type ShutdownSignal = NodeJS.Signals | "exit";

const { log } = logger(module);

export default class ShutdownHandler {
	public static exitOnSignal = false;
	public static disableSignals = false;

	private static isRegistered = false;
	private static hasRunHandlers = false;
	private static readonly onShutdownFns: {
		fn: (signal?: ShutdownSignal) => Promise<any> | any;
		callsite: string;
		runWithDisabledSignals?: boolean;
	}[] = [];

	public static register(
		onShutdownFn: (signal?: ShutdownSignal) => Promise<any> | any,
		runWithDisabledSignals?: boolean,
	): void {
		ShutdownHandler.registerSignals();
		const callsite = new Error().stack
			.split(/\r?\n/)
			.slice(2, 3)
			.shift()
			.trim();
		ShutdownHandler.onShutdownFns.push({
			fn: onShutdownFn,
			callsite,
			runWithDisabledSignals,
		});
	}

	public static unregister(
		onShutdownFn: (signal?: ShutdownSignal) => Promise<any> | any,
	): void {
		const match = ShutdownHandler.onShutdownFns.findIndex(
			(x) => x.fn === onShutdownFn,
		);
		if (match >= 0) ShutdownHandler.onShutdownFns.splice(match, 1);
	}

	public static run(): Promise<void> {
		return ShutdownHandler.onSignal("exit", null, true);
	}

	public static registerSignals(): void {
		if (!ShutdownHandler.isRegistered) {
			ShutdownHandler.isRegistered = true;
			process.once("beforeExit", (code) =>
				ShutdownHandler.onSignal("beforeExit" as any, code),
			);
			process.once("exit" as any, (code) =>
				ShutdownHandler.onSignal("exit", code),
			);
			process.once("SIGTERM", ShutdownHandler.onSignal.bind(ShutdownHandler));
			process.once("SIGINT", ShutdownHandler.onSignal.bind(ShutdownHandler));
			process.once("SIGQUIT", ShutdownHandler.onSignal.bind(ShutdownHandler));
		}
	}

	private static async onSignal(
		signal: ShutdownSignal,
		code?: number,
		isManual = false,
	): Promise<void> {
		if (ShutdownHandler.hasRunHandlers) return;
		ShutdownHandler.hasRunHandlers = true;

		const parentLogId = log.stats("ShutdownHandler.onSignal", {
			signal,
			sessionId: null,
		});

		const keepList = [];
		while (ShutdownHandler.onShutdownFns.length) {
			const entry = ShutdownHandler.onShutdownFns.shift();
			if (
				ShutdownHandler.disableSignals &&
				!isManual &&
				!entry.runWithDisabledSignals
			) {
				keepList.push(entry);
				continue;
			}

			log.stats("ShutdownHandler.execute", {
				signal,
				fn: entry.fn.toString(),
				callsite: entry.callsite,
				sessionId: null,
			});
			try {
				await entry.fn(signal);
			} catch (error) {
				if (error instanceof CanceledPromiseError) continue;
				log.warn("ShutdownHandler.errorShuttingDown", {
					error,
					sessionId: null,
				});
			}
		}
		ShutdownHandler.onShutdownFns.push(...keepList);

		log.stats("ShutdownHandler.shutdownComplete", {
			signal,
			exiting: ShutdownHandler.exitOnSignal,
			sessionId: null,
			parentLogId,
		});

		if (ShutdownHandler.exitOnSignal) {
			process.exit(code ?? 1);
		}
	}
}

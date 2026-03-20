import type { ICommandableTarget } from "./CommandRunner";
import type Session from "./Session";
import Tab from "./Tab";

type AsyncFunc = (...args: any[]) => Promise<any>;

export default class CommandRecorder {
	public readonly fnNames = new Set<string>();
	private readonly fnMap = new Map<string, AsyncFunc>();
	private isClosed = false;

	constructor(
		private owner: ICommandableTarget,
		private session: Session,
		readonly tabId: number,
		readonly frameId: number,
		fns: AsyncFunc[],
	) {
		for (const fn of fns) {
			// used for bypassing recording
			owner[`___${fn.name}`] = fn.bind(owner);
			this.fnMap.set(fn.name, fn.bind(owner));
			owner[fn.name] = this.runCommandFn.bind(this, fn.name);
			this.fnNames.add(fn.name);
		}
	}

	public cleanup(): void {
		this.isClosed = true;
		this.session = null;
		this.owner = null;
		this.fnMap.clear();
	}

	private async runCommandFn<T>(
		functionName: string,
		...args: any[]
	): Promise<T> {
		if (this.isClosed) return;
		const commandFn = this.fnMap.get(functionName);
		if (!this.fnNames.has(functionName) || !commandFn)
			throw new Error(`Unsupported function requested ${functionName}`);

		const { session, owner } = this;
		if (session === null) return;
		const commands = session.commands;
		// retrieve before any async loop deferrals
		const meta = commands.presetMeta;
		session.commands.presetMeta = null;

		const shouldWait =
			!owner.shouldWaitForCommandLock ||
			owner.shouldWaitForCommandLock(functionName);
		if (shouldWait) await commands.waitForCommandLock();

		let tabId = this.tabId;
		const frameId = this.frameId;

		if (!tabId && args.length && args[0] instanceof Tab) {
			tabId = args[0].id;
		}

		const tab = session.getTab(tabId);
		const frame =
			tab?.getFrameEnvironment(frameId) ??
			this.session.getLastActiveTab()?.mainFrameEnvironment;

		const commandMeta = commands.create(
			tabId,
			frameId,
			frame?.navigations?.top?.id,
			functionName,
			args,
			meta,
		);

		commands.willRunCommand(commandMeta);
		tab?.willRunCommand(commandMeta);

		console.log("[Command.run]", commandMeta);

		let result: T;
		try {
			commands.onStart(commandMeta, Date.now());

			result = await commandFn.call(owner, ...args);
			return result;
		} catch (err) {
			result = err;
			throw err;
		} finally {
			const mainFrame =
				frame ?? (tab ?? session.getLastActiveTab())?.mainFrameEnvironment;
			commands.onFinished(commandMeta, result, mainFrame?.navigations?.top?.id);
			console.log("[Command.done]", {
				id: commandMeta.id,
				result,
			});
		}
	}
}

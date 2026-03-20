import type Core from "@ulixee/hero-core";
import { Session } from "@ulixee/hero-core";
import CorePlugins from "@ulixee/hero-core/lib/CorePlugins";
import type BrowserContext from "@ulixee/unblocked-agent/lib/BrowserContext";

export default class MirrorContext {
	public static async createFromSessionDb(
		sessionId: string,
		core: Core,
		headed = true,
	): Promise<BrowserContext> {
		const options = await Session.restoreOptionsFromSessionRecord(
			{},
			sessionId,
			core,
		);
		delete options.resumeSessionId;
		delete options.resumeSessionStartLocation;
		options.showChromeInteractions = headed;
		options.showChrome = headed;

		const agent = core.pool.createAgent({
			options,
			deviceProfile: options?.userProfile?.deviceProfile,
			id: sessionId,
		});

		const _ = new CorePlugins(
			agent,
			{
				getSessionSummary() {
					return {
						id: sessionId,
						options,
					};
				},
			},
			core.corePluginsById,
		);

		return await agent.open();
	}
}

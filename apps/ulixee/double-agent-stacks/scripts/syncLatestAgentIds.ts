import "@ulixee/commons/lib/SourceMapSupport";
import * as Fs from "node:fs";
import type IUserAgentConfig from "@double-agent/runner/interfaces/IUserAgentConfig";
import { defaultBrowserEngine } from "@ulixee/default-browser-emulator";
import { getExternalDataPath } from "../paths";

const currentBrowserId = defaultBrowserEngine.id;
const prevBrowserId = `${defaultBrowserEngine.name}-${defaultBrowserEngine.majorVersion - 1}-0`;
const agents: IUserAgentConfig = {
	browserIds: [currentBrowserId, prevBrowserId],
};

Fs.writeFileSync(
	getExternalDataPath("userAgentConfig.json"),
	JSON.stringify(agents, null, 2),
);

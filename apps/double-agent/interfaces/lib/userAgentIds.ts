import { createBrowserIdFromUserAgentString } from "@ulixee/real-user-agents/lib/BrowserUtils";
import { createOsIdFromUserAgentString } from "@ulixee/real-user-agents/lib/OsUtils";

export function createUserAgentIdFromString(userAgentString: string): string {
	const osKey = createOsIdFromUserAgentString(userAgentString);
	const browserKey = createBrowserIdFromUserAgentString(userAgentString);
	return createUserAgentIdFromIds(osKey, browserKey);
}

export function createUserAgentIdFromIds(
	osId: string,
	browserId: string,
): string {
	return `${osId}--${browserId}`;
}

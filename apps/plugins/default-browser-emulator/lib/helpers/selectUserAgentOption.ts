import type IUserAgentOption from "@ulixee/unblocked-specification/plugin/IUserAgentOption";
import type UserAgentOptions from "../UserAgentOptions";
import UserAgentPatternSelector from "../UserAgentSelector";

export default function selectUserAgentOption(
	userAgentSelector: string,
	userAgentOptions: UserAgentOptions,
): IUserAgentOption {
	userAgentSelector = userAgentSelector?.trim();
	if (userAgentSelector === "chrome-latest") userAgentSelector = "";

	if (!userAgentSelector) {
		return userAgentOptions.getDefaultAgentOption();
	}

	if (userAgentSelector.startsWith("~")) {
		const selectors = new UserAgentPatternSelector(userAgentSelector);
		const option = userAgentOptions.findWithSelector(selectors);

		if (!option) {
			throw new Error(
				`No installed UserAgent Emulators match your criteria (${selectors.userAgentSelector})`,
			);
		}
		return option;
	}

	return userAgentOptions.findClosestInstalledToUserAgentString(
		userAgentSelector,
	);
}

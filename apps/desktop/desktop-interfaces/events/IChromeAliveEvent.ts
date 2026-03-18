import type IChromeAliveSessionEvents from "./IChromeAliveSessionEvents";
import type IDesktopAppEvents from "./IDesktopAppEvents";

export default interface IChromeAliveEvent<
	TEvents = IChromeAliveSessionEvents | IDesktopAppEvents,
	T extends keyof TEvents = keyof TEvents,
> {
	eventType: T;
	data: TEvents[T];
}

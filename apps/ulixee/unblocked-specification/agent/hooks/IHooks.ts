import IBrowserHooks, { IBrowserContextHooks } from "./IBrowserHooks";
import IInteractHooks from "./IInteractHooks";
import INetworkHooks from "./INetworkHooks";

export type IHooksProvider = IInteractHooks &
	IBrowserHooks &
	IBrowserContextHooks &
	INetworkHooks;

export { IBrowserContextHooks, IBrowserHooks, IInteractHooks, INetworkHooks };

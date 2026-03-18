import type Resource from "../lib/Resource";
import type IWaitForResourceFilter from "./IWaitForResourceFilter";

export default interface IWaitForResourcesFilter
	extends Omit<IWaitForResourceFilter, "filterFn"> {
	filterFn?: (
		resource: Resource,
		done: () => void,
	) => Promise<boolean> | boolean;
}

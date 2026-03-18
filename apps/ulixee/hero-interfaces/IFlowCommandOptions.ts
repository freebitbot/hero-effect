import type IDomState from "./IDomState";
import type { IDomStateAllFn } from "./IDomState";

export default interface IFlowCommandOptions {
	maxRetries?: number;
	exitState?: IDomState | IDomStateAllFn;
}

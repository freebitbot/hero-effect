import type IPoint from "../browser/IPoint";
import type {
	IInteractionGroups,
	IInteractionStep,
} from "../interact/IInteractions";
import type IInteractionsHelper from "../interact/IInteractionsHelper";

export default interface IInteractHooks {
	playInteractions?(
		interactions: IInteractionGroups,
		runFn: (interaction: IInteractionStep) => Promise<void>,
		helper?: IInteractionsHelper,
	): Promise<void>;

	adjustStartingMousePoint?(
		point: IPoint,
		helper?: IInteractionsHelper,
	): Promise<void> | void;
}

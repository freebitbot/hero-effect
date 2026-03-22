import type { IBody } from "../../base/interfaces/official";
import BodyBase, {
	type IBodyProperties,
} from "../../base/official-mixins/Body";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBody, IBodyProperties>();

export default class Body extends BodyBase implements IBody {}

import type { IBlob } from "../../base/interfaces/official";
import {
	BlobGenerator,
	type IBlobProperties,
} from "../../base/official-klasses/Blob";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IBlob, IBlobProperties>();
const BlobBaseClass = BlobGenerator();

export default class Blob extends BlobBaseClass implements IBlob {}

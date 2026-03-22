import type { IStorage } from "../../base/interfaces/official";
import {
	type IStorageProperties,
	StorageGenerator,
} from "../../base/official-klasses/Storage";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IStorage,
	IStorageProperties
>();
const StorageBaseClass = StorageGenerator();

export default class Storage extends StorageBaseClass implements IStorage {}

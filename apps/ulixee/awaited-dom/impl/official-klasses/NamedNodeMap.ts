import { IAttr, type INamedNodeMap } from "../../base/interfaces/official";
import {
	type INamedNodeMapProperties,
	NamedNodeMapGenerator,
} from "../../base/official-klasses/NamedNodeMap";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	INamedNodeMap,
	INamedNodeMapProperties
>();
const NamedNodeMapBaseClass = NamedNodeMapGenerator();

export default class NamedNodeMap
	extends NamedNodeMapBaseClass
	implements INamedNodeMap {}

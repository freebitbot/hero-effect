import type { IRadioNodeList } from "../../base/interfaces/official";
import { ISuperNode } from "../../base/interfaces/super";
import {
	type IRadioNodeListProperties,
	RadioNodeListGenerator,
} from "../../base/official-klasses/RadioNodeList";
import StateMachine from "../../base/StateMachine";
import NodeList from "./NodeList";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IRadioNodeList,
	IRadioNodeListProperties
>();
const RadioNodeListBaseClass = RadioNodeListGenerator(NodeList);

export default class RadioNodeList
	extends RadioNodeListBaseClass
	implements IRadioNodeList
{
	constructor() {
		super();
	}
}

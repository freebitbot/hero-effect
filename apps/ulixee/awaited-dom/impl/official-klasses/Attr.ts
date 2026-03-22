import type { IAttr } from "../../base/interfaces/official";
import type { ISuperElement } from "../../base/interfaces/super";
import {
	AttrGenerator,
	type IAttrProperties,
} from "../../base/official-klasses/Attr";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";
import Node from "./Node";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttr, IAttrProperties>();
const AttrBaseClass = AttrGenerator(Node);

export default class Attr extends AttrBaseClass implements IAttr {
	constructor() {
		super();
	}

	// properties

	public get ownerElement(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "ownerElement"),
			awaitedOptions,
		);
	}
}

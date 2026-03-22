import type { IHTMLOptionsCollection } from "../../base/interfaces/official";
import { ISuperElement } from "../../base/interfaces/super";
import {
	HTMLOptionsCollectionGenerator,
	type IHTMLOptionsCollectionProperties,
} from "../../base/official-klasses/HTMLOptionsCollection";
import StateMachine from "../../base/StateMachine";
import HTMLCollection from "./HTMLCollection";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOptionsCollection,
	IHTMLOptionsCollectionProperties
>();
const HTMLOptionsCollectionBaseClass =
	HTMLOptionsCollectionGenerator(HTMLCollection);

export default class HTMLOptionsCollection
	extends HTMLOptionsCollectionBaseClass
	implements IHTMLOptionsCollection
{
	constructor() {
		super();
	}
}

import type { IDocumentFragment } from "../../base/interfaces/official";
import {
	DocumentFragmentGenerator,
	type IDocumentFragmentProperties,
} from "../../base/official-klasses/DocumentFragment";
import StateMachine from "../../base/StateMachine";
import NonElementParentNode from "../official-mixins/NonElementParentNode";
import ParentNode from "../official-mixins/ParentNode";
import Node from "./Node";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDocumentFragment,
	IDocumentFragmentProperties
>();
const DocumentFragmentBaseClass = DocumentFragmentGenerator(
	Node,
	NonElementParentNode,
	ParentNode,
);

export default class DocumentFragment
	extends DocumentFragmentBaseClass
	implements IDocumentFragment
{
	constructor() {
		super();
	}
}

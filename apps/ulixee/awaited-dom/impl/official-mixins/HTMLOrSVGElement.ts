import type { IHTMLOrSVGElement } from "../../base/interfaces/official";
import HTMLOrSVGElementBase, {
	type IHTMLOrSVGElementProperties,
} from "../../base/official-mixins/HTMLOrSVGElement";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOrSVGElement,
	IHTMLOrSVGElementProperties
>();

export default class HTMLOrSVGElement
	extends HTMLOrSVGElementBase
	implements IHTMLOrSVGElement {}

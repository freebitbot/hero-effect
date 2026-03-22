import type { IHeaders } from "../../base/interfaces/official";
import {
	HeadersGenerator,
	type IHeadersProperties,
} from "../../base/official-klasses/Headers";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHeaders,
	IHeadersProperties
>();
const HeadersBaseClass = HeadersGenerator();

export default class Headers extends HeadersBaseClass implements IHeaders {}

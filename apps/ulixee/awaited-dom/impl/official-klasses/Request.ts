import type {
	IHeaders,
	IRequest,
	IRequestInfo,
	IRequestInit,
} from "../../base/interfaces/official";
import {
	type IRequestProperties,
	RequestGenerator,
} from "../../base/official-klasses/Request";
import StateMachine from "../../base/StateMachine";
import { createHeaders } from "../create";
import Body from "../official-mixins/Body";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IRequest,
	IRequestProperties
>();
const RequestBaseClass = RequestGenerator(Body);

export default class Request extends RequestBaseClass implements IRequest {
	constructor(_input: IRequestInfo, _init?: IRequestInit) {
		super(_input, _init);
	}

	// properties

	public get headers(): IHeaders {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createHeaders(
			awaitedPath.addProperty(this, "headers"),
			awaitedOptions,
		);
	}
}

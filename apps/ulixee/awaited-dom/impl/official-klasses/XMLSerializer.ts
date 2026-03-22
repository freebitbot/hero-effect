import type { IXMLSerializer } from "../../base/interfaces/official";
import {
	type IXMLSerializerProperties,
	XMLSerializerGenerator,
} from "../../base/official-klasses/XMLSerializer";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXMLSerializer,
	IXMLSerializerProperties
>();
const XMLSerializerBaseClass = XMLSerializerGenerator();

export default class XMLSerializer
	extends XMLSerializerBaseClass
	implements IXMLSerializer {}

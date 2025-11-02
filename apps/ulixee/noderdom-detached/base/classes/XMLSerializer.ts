import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IXMLSerializer } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfXMLSerializer } = StateMachine<
  IXMLSerializer,
  IXMLSerializerProperties,
  IXMLSerializerReadonlyProperties
>('XMLSerializer');
export const internalHandler = new InternalHandler<IXMLSerializer>('XMLSerializer', getState, setState);

export default class XMLSerializer implements IXMLSerializer {
  constructor() {
    initializeConstantsAndPrototypes<XMLSerializer>(XMLSerializer, this, internalHandler, XMLSerializerConstantKeys, XMLSerializerPropertyKeys);
  }

  // methods

  public serializeToString(root: INode): string {
    return internalHandler.run<string>(this, 'serializeToString', [root]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IXMLSerializerProperties {}

export interface IXMLSerializerReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const XMLSerializerPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const XMLSerializerConstantKeys = [];

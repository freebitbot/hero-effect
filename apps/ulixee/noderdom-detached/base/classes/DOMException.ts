import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMException } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMException } = StateMachine<
  IDOMException,
  IDOMExceptionProperties,
  IDOMExceptionReadonlyProperties
>('DOMException');
export const internalHandler = new InternalHandler<IDOMException>('DOMException', getState, setState);

export default class DOMException implements IDOMException {
  public static readonly ABORT_ERR: number = 20;
  public static readonly DATA_CLONE_ERR: number = 25;
  public static readonly DOMSTRING_SIZE_ERR: number = 2;
  public static readonly HIERARCHY_REQUEST_ERR: number = 3;
  public static readonly INDEX_SIZE_ERR: number = 1;
  public static readonly INUSE_ATTRIBUTE_ERR: number = 10;
  public static readonly INVALID_ACCESS_ERR: number = 15;
  public static readonly INVALID_CHARACTER_ERR: number = 5;
  public static readonly INVALID_MODIFICATION_ERR: number = 13;
  public static readonly INVALID_NODE_TYPE_ERR: number = 24;
  public static readonly INVALID_STATE_ERR: number = 11;
  public static readonly NAMESPACE_ERR: number = 14;
  public static readonly NETWORK_ERR: number = 19;
  public static readonly NOT_FOUND_ERR: number = 8;
  public static readonly NOT_SUPPORTED_ERR: number = 9;
  public static readonly NO_DATA_ALLOWED_ERR: number = 6;
  public static readonly NO_MODIFICATION_ALLOWED_ERR: number = 7;
  public static readonly QUOTA_EXCEEDED_ERR: number = 22;
  public static readonly SECURITY_ERR: number = 18;
  public static readonly SYNTAX_ERR: number = 12;
  public static readonly TIMEOUT_ERR: number = 23;
  public static readonly TYPE_MISMATCH_ERR: number = 17;
  public static readonly URL_MISMATCH_ERR: number = 21;
  public static readonly VALIDATION_ERR: number = 16;
  public static readonly WRONG_DOCUMENT_ERR: number = 4;

  public readonly ABORT_ERR: number = 20;
  public readonly DATA_CLONE_ERR: number = 25;
  public readonly DOMSTRING_SIZE_ERR: number = 2;
  public readonly HIERARCHY_REQUEST_ERR: number = 3;
  public readonly INDEX_SIZE_ERR: number = 1;
  public readonly INUSE_ATTRIBUTE_ERR: number = 10;
  public readonly INVALID_ACCESS_ERR: number = 15;
  public readonly INVALID_CHARACTER_ERR: number = 5;
  public readonly INVALID_MODIFICATION_ERR: number = 13;
  public readonly INVALID_NODE_TYPE_ERR: number = 24;
  public readonly INVALID_STATE_ERR: number = 11;
  public readonly NAMESPACE_ERR: number = 14;
  public readonly NETWORK_ERR: number = 19;
  public readonly NOT_FOUND_ERR: number = 8;
  public readonly NOT_SUPPORTED_ERR: number = 9;
  public readonly NO_DATA_ALLOWED_ERR: number = 6;
  public readonly NO_MODIFICATION_ALLOWED_ERR: number = 7;
  public readonly QUOTA_EXCEEDED_ERR: number = 22;
  public readonly SECURITY_ERR: number = 18;
  public readonly SYNTAX_ERR: number = 12;
  public readonly TIMEOUT_ERR: number = 23;
  public readonly TYPE_MISMATCH_ERR: number = 17;
  public readonly URL_MISMATCH_ERR: number = 21;
  public readonly VALIDATION_ERR: number = 16;
  public readonly WRONG_DOCUMENT_ERR: number = 4;

  // constructor required for this class

  constructor(_message?: string, _name?: string) {
    initializeConstantsAndPrototypes<DOMException>(DOMException, this, internalHandler, DOMExceptionConstantKeys, DOMExceptionPropertyKeys);
  }

  // properties

  public get code(): number {
    return internalHandler.get<number>(this, 'code', false);
  }

  public get message(): string {
    return internalHandler.get<string>(this, 'message', false);
  }

  public get name(): string {
    return internalHandler.get<string>(this, 'name', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMExceptionProperties {
  code?: number;
  message?: string;
  name?: string;
}

export interface IDOMExceptionReadonlyProperties {
  code?: number;
  message?: string;
  name?: string;
}

// tslint:disable-next-line:variable-name
export const DOMExceptionPropertyKeys = ['code', 'message', 'name'];

// tslint:disable-next-line:variable-name
export const DOMExceptionConstantKeys = ['INDEX_SIZE_ERR', 'DOMSTRING_SIZE_ERR', 'HIERARCHY_REQUEST_ERR', 'WRONG_DOCUMENT_ERR', 'INVALID_CHARACTER_ERR', 'NO_DATA_ALLOWED_ERR', 'NO_MODIFICATION_ALLOWED_ERR', 'NOT_FOUND_ERR', 'NOT_SUPPORTED_ERR', 'INUSE_ATTRIBUTE_ERR', 'INVALID_STATE_ERR', 'SYNTAX_ERR', 'INVALID_MODIFICATION_ERR', 'NAMESPACE_ERR', 'INVALID_ACCESS_ERR', 'VALIDATION_ERR', 'TYPE_MISMATCH_ERR', 'SECURITY_ERR', 'NETWORK_ERR', 'ABORT_ERR', 'URL_MISMATCH_ERR', 'QUOTA_EXCEEDED_ERR', 'TIMEOUT_ERR', 'INVALID_NODE_TYPE_ERR', 'DATA_CLONE_ERR'];

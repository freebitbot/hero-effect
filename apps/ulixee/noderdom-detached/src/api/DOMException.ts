import { IDOMException } from '../../base/interfaces';
import BaseDOMException, { getState, setState } from '../../base/classes/DOMException';

const nameToCode: Record<string, number> = {
  IndexSizeError: 1,
  DomstringSizeError: 2,
  HierarchyRequestError: 3,
  WrongDocumentError: 4,
  InvalidCharacterError: 5,
  NoDataAllowedError: 6,
  NoModificationAllowedError: 7,
  NotFoundError: 8,
  NotSupportedError: 9,
  InuseAttributeError: 10,
  InvalidStateError: 11,
  SyntaxError: 12,
  InvalidModificationError: 13,
  NamespaceError: 14,
  InvalidAccessError: 15,
  ValidationError: 16,
  TypeMismatchError: 17,
  SecurityError: 18,
  NetworkError: 19,
  AbortError: 20,
  UrlMismatchError: 21,
  QuoteExceededError: 22,
  TimeoutError: 23,
  InvalidNodeTypeError: 24,
  DataCloneError: 25,
};

export default class DOMException extends BaseDOMException implements IDOMException {
  constructor(message?: string, name?: string) {
    super();
    setState(this, {
      code: name ? nameToCode[name] || 0 : 0,
      message: message || '',
      name: name || 'UnknownError',
    });
  }

  public get code(): number {
    return getState(this).code;
  }

  public get message(): string {
    return getState(this).message;
  }

  public get name(): string {
    return getState(this).name;
  }
}

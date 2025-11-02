import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IValidityState } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfValidityState } = StateMachine<
  IValidityState,
  IValidityStateProperties,
  IValidityStateReadonlyProperties
>('ValidityState');
export const internalHandler = new InternalHandler<IValidityState>('ValidityState', getState, setState);

export default class ValidityState implements IValidityState {
  constructor() {
    initializeConstantsAndPrototypes<ValidityState>(ValidityState, this, internalHandler, ValidityStateConstantKeys, ValidityStatePropertyKeys);
  }

  // properties

  public get badInput(): boolean {
    return internalHandler.get<boolean>(this, 'badInput', false);
  }

  public get customError(): boolean {
    return internalHandler.get<boolean>(this, 'customError', false);
  }

  public get patternMismatch(): boolean {
    return internalHandler.get<boolean>(this, 'patternMismatch', false);
  }

  public get rangeOverflow(): boolean {
    return internalHandler.get<boolean>(this, 'rangeOverflow', false);
  }

  public get rangeUnderflow(): boolean {
    return internalHandler.get<boolean>(this, 'rangeUnderflow', false);
  }

  public get stepMismatch(): boolean {
    return internalHandler.get<boolean>(this, 'stepMismatch', false);
  }

  public get tooLong(): boolean {
    return internalHandler.get<boolean>(this, 'tooLong', false);
  }

  public get tooShort(): boolean {
    return internalHandler.get<boolean>(this, 'tooShort', false);
  }

  public get typeMismatch(): boolean {
    return internalHandler.get<boolean>(this, 'typeMismatch', false);
  }

  public get valid(): boolean {
    return internalHandler.get<boolean>(this, 'valid', false);
  }

  public get valueMissing(): boolean {
    return internalHandler.get<boolean>(this, 'valueMissing', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IValidityStateProperties {
  badInput?: boolean;
  customError?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  stepMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
  valid?: boolean;
  valueMissing?: boolean;
}

export interface IValidityStateReadonlyProperties {
  badInput?: boolean;
  customError?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  stepMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
  valid?: boolean;
  valueMissing?: boolean;
}

// tslint:disable-next-line:variable-name
export const ValidityStatePropertyKeys = ['badInput', 'customError', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valid', 'valueMissing'];

// tslint:disable-next-line:variable-name
export const ValidityStateConstantKeys = [];

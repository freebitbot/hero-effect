import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ILocation } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfLocation } = StateMachine<
  ILocation,
  ILocationProperties,
  ILocationReadonlyProperties
>('Location');
export const internalHandler = new InternalHandler<ILocation>('Location', getState, setState);

export default class Location implements ILocation {
  constructor() {
    initializeConstantsAndPrototypes<Location>(Location, this, internalHandler, LocationConstantKeys, LocationPropertyKeys);
  }

  // properties

  public get hash(): string {
    return internalHandler.get<string>(this, 'hash', false);
  }

  public set hash(value: string) {
    internalHandler.set<string>(this, 'hash', value);
  }

  public get host(): string {
    return internalHandler.get<string>(this, 'host', false);
  }

  public set host(value: string) {
    internalHandler.set<string>(this, 'host', value);
  }

  public get hostname(): string {
    return internalHandler.get<string>(this, 'hostname', false);
  }

  public set hostname(value: string) {
    internalHandler.set<string>(this, 'hostname', value);
  }

  public get href(): string {
    return internalHandler.get<string>(this, 'href', false);
  }

  public set href(value: string) {
    internalHandler.set<string>(this, 'href', value);
  }

  public get origin(): string {
    return internalHandler.get<string>(this, 'origin', false);
  }

  public get pathname(): string {
    return internalHandler.get<string>(this, 'pathname', false);
  }

  public set pathname(value: string) {
    internalHandler.set<string>(this, 'pathname', value);
  }

  public get port(): string {
    return internalHandler.get<string>(this, 'port', false);
  }

  public set port(value: string) {
    internalHandler.set<string>(this, 'port', value);
  }

  public get protocol(): string {
    return internalHandler.get<string>(this, 'protocol', false);
  }

  public set protocol(value: string) {
    internalHandler.set<string>(this, 'protocol', value);
  }

  public get search(): string {
    return internalHandler.get<string>(this, 'search', false);
  }

  public set search(value: string) {
    internalHandler.set<string>(this, 'search', value);
  }

  // methods

  public assign(url: string): void {
    internalHandler.run<void>(this, 'assign', [url]);
  }

  public reload(): void {
    internalHandler.run<void>(this, 'reload', []);
  }

  public replace(url: string): void {
    internalHandler.run<void>(this, 'replace', [url]);
  }

  public toString(): string {
    return internalHandler.run<string>(this, 'string', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ILocationProperties {
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

export interface ILocationReadonlyProperties {
  origin?: string;
}

// tslint:disable-next-line:variable-name
export const LocationPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];

// tslint:disable-next-line:variable-name
export const LocationConstantKeys = [];

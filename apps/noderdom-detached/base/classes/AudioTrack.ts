import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IAudioTrack } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfAudioTrack } = StateMachine<
  IAudioTrack,
  IAudioTrackProperties,
  IAudioTrackReadonlyProperties
>('AudioTrack');
export const internalHandler = new InternalHandler<IAudioTrack>('AudioTrack', getState, setState);

export default class AudioTrack implements IAudioTrack {
  constructor() {
    initializeConstantsAndPrototypes<AudioTrack>(AudioTrack, this, internalHandler, AudioTrackConstantKeys, AudioTrackPropertyKeys);
  }

  // properties

  public get enabled(): boolean {
    return internalHandler.get<boolean>(this, 'enabled', false);
  }

  public set enabled(value: boolean) {
    internalHandler.set<boolean>(this, 'enabled', value);
  }

  public get id(): string {
    return internalHandler.get<string>(this, 'id', false);
  }

  public get kind(): string {
    return internalHandler.get<string>(this, 'kind', false);
  }

  public get label(): string {
    return internalHandler.get<string>(this, 'label', false);
  }

  public get language(): string {
    return internalHandler.get<string>(this, 'language', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IAudioTrackProperties {
  enabled?: boolean;
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

export interface IAudioTrackReadonlyProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

// tslint:disable-next-line:variable-name
export const AudioTrackPropertyKeys = ['enabled', 'id', 'kind', 'label', 'language'];

// tslint:disable-next-line:variable-name
export const AudioTrackConstantKeys = [];

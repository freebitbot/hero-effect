import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IVideoTrack } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfVideoTrack } = StateMachine<
  IVideoTrack,
  IVideoTrackProperties,
  IVideoTrackReadonlyProperties
>('VideoTrack');
export const internalHandler = new InternalHandler<IVideoTrack>('VideoTrack', getState, setState);

export default class VideoTrack implements IVideoTrack {
  constructor() {
    initializeConstantsAndPrototypes<VideoTrack>(VideoTrack, this, internalHandler, VideoTrackConstantKeys, VideoTrackPropertyKeys);
  }

  // properties

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

  public get selected(): boolean {
    return internalHandler.get<boolean>(this, 'selected', false);
  }

  public set selected(value: boolean) {
    internalHandler.set<boolean>(this, 'selected', value);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IVideoTrackProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
  selected?: boolean;
}

export interface IVideoTrackReadonlyProperties {
  id?: string;
  kind?: string;
  label?: string;
  language?: string;
}

// tslint:disable-next-line:variable-name
export const VideoTrackPropertyKeys = ['id', 'kind', 'label', 'language', 'selected'];

// tslint:disable-next-line:variable-name
export const VideoTrackConstantKeys = [];

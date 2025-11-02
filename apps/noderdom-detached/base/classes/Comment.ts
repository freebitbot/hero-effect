import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICharacterData, IComment } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';

export const { getState, setState, setHiddenState, setReadonlyOfComment } = StateMachine<
  IComment,
  ICommentProperties,
  ICommentReadonlyProperties
>('Comment');
export const internalHandler = new InternalHandler<IComment>('Comment', getState, setState);

// tslint:disable-next-line:variable-name
export function CommentGenerator(CharacterData: Constructable<ICharacterData>) {
  return class Comment extends CharacterData implements IComment {
    constructor(_data?: string) {
      super();
      initializeConstantsAndPrototypes<Comment>(Comment, this, internalHandler, CommentConstantKeys, CommentPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICommentProperties extends ICharacterDataProperties {}

export interface ICommentReadonlyProperties extends ICharacterDataReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const CommentPropertyKeys = [...CharacterDataPropertyKeys];

// tslint:disable-next-line:variable-name
export const CommentConstantKeys = [...CharacterDataConstantKeys];

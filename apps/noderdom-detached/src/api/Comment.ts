import { CommentGenerator, setState } from '../../base/classes/Comment';
import { IComment } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';
import CharacterData from './CharacterData';

export default class Comment extends CommentGenerator(CharacterData) implements IComment {
  constructor() {
    super();
    setState(this, {
      nodeName: '#comment',
      nodeType: NODE_TYPE.COMMENT_NODE,
    });
  }
}

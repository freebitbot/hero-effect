import { INode } from '../../base/interfaces';

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
// tslint:disable-next-line:function-name
export function _visitNode(n: INode, callback: (node: INode) => boolean | undefined | void) {
  let node: INode | null = n;

  if (callback(node)) {
    return true;
  }

  node = node.firstChild;

  while (node) {
    if (_visitNode(node, callback)) {
      return true;
    }
    node = node.nextSibling;
  }
}

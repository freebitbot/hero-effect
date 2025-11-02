import { AttrGenerator, setState, internalHandler } from '../../base/classes/Attr';
import { IAttr } from '../../base/interfaces';
import Node from './Node';
import NODE_TYPE from '../constants/NodeType';

export default class Attr extends AttrGenerator(Node) implements IAttr {
  constructor() {
    super();
    setState(this, {
      nodeType: NODE_TYPE.ATTRIBUTE_NODE,
    });
  }

  public get value(): string {
    return this.nodeValue || '';
  }

  public set value(value: string) {
    this.nodeValue = value;
  }

  // not allowed on Attr

  public appendChild(node: IAttr): IAttr {
    return internalHandler.run<IAttr>(this, 'appendChild', [node]);
  }

  public hasChildNodes(): boolean {
    return internalHandler.run<boolean>(this, 'hasChildNodes', []);
  }

  public insertBefore(node: IAttr, child: IAttr | null): IAttr {
    return internalHandler.run<IAttr>(this, 'insertBefore', [node, child]);
  }

  public isEqualNode(otherNode: IAttr | null): boolean {
    return internalHandler.run<boolean>(this, 'isEqualNode', [otherNode]);
  }

  public normalize(): void {
    internalHandler.run<void>(this, 'normalize', []);
  }

  public removeChild(child: IAttr): IAttr {
    return internalHandler.run<IAttr>(this, 'removeChild', [child]);
  }

  public replaceChild(node: IAttr, child: IAttr): IAttr {
    return internalHandler.run<IAttr>(this, 'replaceChild', [node, child]);
  }
}

internalHandler.handle('name', 'ownerElement', 'namespaceURI', 'prefix', 'localName');
internalHandler.remove(
  'attributes',
  'childNodes',
  'firstChild',
  'lastChild',
  'nextSibling',
  'nodeName',
  'nodeType',
  'nodeValue',
  'ownerDocument',
  'parentNode',
  'previousSibling',
  'schemaTypeInfo',
  'specified',
  'textContent',
);

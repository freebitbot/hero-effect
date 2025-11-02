import DOMParser from '../../src/api/DOMParser';
import DOMException from '../../src/api/DOMException';
import NODE_TYPE from '../../src/constants/NodeType';
import { IDocument, IElement } from '../../base/interfaces';
import { readFileSync } from 'fs';

describe('O3XML tests', () => {
  function readFile(name: string) {
    return readFileSync(`test/external/${name}`).toString();
  }

  function isSame(a: IDocument | IElement, b: IDocument | IElement) {
    const aElem = a.nodeType === NODE_TYPE.DOCUMENT_NODE ? (a as IDocument).documentElement! : (a as IElement);
    const bElem = b.nodeType === NODE_TYPE.DOCUMENT_NODE ? (b as IDocument).documentElement! : (b as IElement);
    return aElem.outerHTML === bElem.outerHTML;
  }

  const xml = new DOMParser();

  it('test0', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    refParent.insertBefore(elem.childNodes[1].childNodes[3], refParent.childNodes[3]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test0.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test1', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[1];

    refParent.insertBefore(elem.childNodes[1].childNodes[3], refParent.childNodes[7]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test1.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test2', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[1];

    refParent.insertBefore(elem.childNodes[1].childNodes[3], refParent.childNodes[4]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test2.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test3', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[1];

    refParent.insertBefore(doc.createElement('subtitle'), refParent.childNodes[7]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test3.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test5', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    refParent.appendChild(elem.childNodes[1].childNodes[3]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test5.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test6', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[1];

    refParent.appendChild(refParent.childNodes[3]);
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test6.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test7', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[1];

    elem.normalize();
    refParent.appendChild(refParent.childNodes[12]);
    expect(isSame(doc, xml.parseFromString(readFile('test7.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test8', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const to = elem.childNodes[1];

    to.appendChild(doc.createElement('subtitle'));
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test8.xml'), 'text/xml'))).toBeTruthy();
  });

  it.skip('test9', () => {
    const elem = xml.parseFromString(readFile('test.xml'), 'text/xml').documentElement!;
    const refParent = elem.childNodes[1];

    expect(() => {
      refParent.appendChild(xml.parseFromString(readFile('test.xml'), 'text/xml').createElement('subtitle'));
    }).toThrow(Error);
  });

  it.skip('test10', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    expect(() => {
      refParent.insertBefore(elem, refParent.childNodes[3]);
    }).toThrow(Error);
  });

  it.skip('test11', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    expect(() => {
      refParent.appendChild(elem);
    }).toThrow(Error);
  });

  it('test12', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    expect(() => {
      refParent.insertBefore(null as never, refParent.childNodes[3]);
    }).toThrow(Error);
  });

  it('test13', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];
    const child = refParent.removeChild(refParent.childNodes[3]);

    elem.normalize();
    expect(child.parentNode).toBeFalsy();
    expect(isSame(doc, xml.parseFromString(readFile('test13.xml'), 'text/xml'))).toBeTruthy();
  });

  it.skip('test14', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];
    const child = refParent.removeChild(refParent.childNodes[3]);

    expect(() => {
      refParent.removeChild(child);
    }).toThrow(Error);
  });

  it('test15', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3];

    expect(() => {
      refParent.removeChild(null as never);
    }).toThrow(Error);
  });

  it('test16', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.getElementById('bk102')!;

    elem.normalize();

    expect(elem.parentNode!.nodeName).toBe('CATALOG');
    expect(isSame(elem, xml.parseFromString(readFile('test16.xml'), 'text/xml').documentElement!)).toBeTruthy();
  });

  it('test17', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.getElementById('bk103')!;

    expect(elem).toBeNull();
  });

  it('test18', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elems = doc.getElementsByTagName('book');
    const elem = elems[1];

    elem.normalize();

    expect(elems).toHaveLength(2);
    expect(elem.parentNode!.nodeName).toBe('CATALOG');
    isSame(elem, xml.parseFromString(readFile('test18.xml'), 'text/xml').documentElement!);
  });

  it('test19', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elems = doc.getElementsByTagName('shelf');
    const elem = elems[0];

    expect(elems).toHaveLength(0);
    expect(elem).toBeUndefined();
  });

  it('test20', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!.childNodes[3] as IElement;

    expect(elem.getAttribute('id')).toBe('bk102');
  });

  it('test21', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!.childNodes[3] as IElement;

    expect(elem.getAttribute('isbn')).toBeNull();
  });

  it.skip('test22', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!.childNodes[3] as IElement;

    expect(() => {
      elem.getAttribute('@id');
    }).toThrow(Error);
  });

  it('test23', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3] as IElement;

    refParent.setAttribute('id', 'bk103');
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test23.xml'), 'text/xml'))).toBeTruthy();
  });

  it('test24', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3] as IElement;

    refParent.setAttribute('isbn', '9783161484100');
    elem.normalize();
    expect(isSame(doc, xml.parseFromString(readFile('test24.xml'), 'text/xml'))).toBeTruthy();
  });

  it.skip('test25', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!.childNodes[3] as IElement;

    expect(() => {
      elem.setAttribute('@id', 'bk103');
    }).toThrow(Error);
  });

  it('test26', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const attr = doc.createAttribute('isbn');

    attr.nodeValue = '9783161484100';
    expect(attr.ownerDocument).toBe(doc);
    expect(attr.parentNode).toBeNull();
    expect(attr.nodeType).toBe(attr.ATTRIBUTE_NODE);
    expect(attr.nodeName).toBe('isbn');
    expect(attr.nodeValue).toBe('9783161484100');
  });

  it('test27', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3] as IElement;
    const attr = doc.createAttribute('isbn');

    attr.nodeValue = '9783161484100';
    refParent.setAttributeNode(attr);
    elem.normalize();
    isSame(doc, xml.parseFromString(readFile('test27.xml'), 'text/xml'));
  });

  it('test28', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3] as IElement;
    const attr = refParent.getAttributeNode('id')!;

    refParent.setAttributeNode(attr);
    elem.normalize();
    isSame(doc, xml.parseFromString(readFile('test28.xml'), 'text/xml'));
  });

  it('test29', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.documentElement!;
    const refParent = elem.childNodes[3] as IElement;
    const attr = (elem.childNodes[1] as IElement).getAttributeNode('id')!;
    (elem.childNodes[1] as IElement).removeAttributeNode(attr);

    refParent.setAttributeNode(attr);
    elem.normalize();
    isSame(doc, xml.parseFromString(readFile('test29.xml'), 'text/xml'));
  });

  it('test30', () => {
    const elem = xml.parseFromString(readFile('test.xml'), 'text/xml').documentElement!;
    const refParent = elem.childNodes[3] as IElement;

    expect(() => {
      refParent.setAttributeNode(xml.parseFromString(readFile('test.xml'), 'text/xml').createAttribute('subtitle'));
    }).toThrow(DOMException);
  });

  it('test31', () => {
    const doc = xml.parseFromString(readFile('test.xml'), 'text/xml');
    const elem = doc.createElement('element');
    const attr = doc.createAttribute('attribute');
    const text = doc.createTextNode('Lorem ipsum');
    const cdata = doc.createCDATASection('Lorem ipsum');
    const comment = doc.createComment('Lorem ipsum');

    expect(elem.nodeType).toBe(elem.ELEMENT_NODE);
    expect(elem.nodeName).toBe('ELEMENT');
    expect(elem.parentNode).toBeNull();
    expect(attr.nodeType).toBe(attr.ATTRIBUTE_NODE);
    expect(attr.nodeName).toBe('attribute');
    expect(attr.parentNode).toBeNull();
    expect(text.nodeType).toBe(text.TEXT_NODE);
    expect(text.nodeValue).toBe('Lorem ipsum');
    expect(text.parentNode).toBeNull();
    expect(cdata.nodeType).toBe(cdata.CDATA_SECTION_NODE);
    expect(cdata.nodeValue).toBe('Lorem ipsum');
    expect(cdata.parentNode).toBeNull();
    expect(comment.nodeType).toBe(cdata.COMMENT_NODE);
    expect(comment.nodeValue).toBe('Lorem ipsum');
    expect(comment.parentNode).toBeNull();
  });
});

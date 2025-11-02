import Node from '../../src/api/Node';
import DOMParser from '../../src/api/DOMParser';
import XMLSerializer from '../../src/api/XMLSerializer';
import Text from '../../src/api/Text';
import Element from '../../src/api/Element';
import CDATASection from '../../src/api/CDATASection';

describe('Node parse tests', () => {
  it('element test', () => {
    const dom = new DOMParser().parseFromString('<xml><child/></xml>', 'text/xml');
    const root = dom.documentElement!;
    expect(dom.childNodes).toHaveLength(1);
    expect(root.childNodes).toHaveLength(1);
    expect(root.tagName).toBe('XML');
    expect((root.firstChild as Element).tagName).toBe('CHILD');
  });

  it('text test', () => {
    const dom = new DOMParser().parseFromString('<xml>start center end</xml>', 'text/xml');
    const root = dom.documentElement!;
    expect((root.firstChild as Text).data).toBe('start center end');
    expect(root.firstChild!.nextSibling == null);
  });

  it('cdata test', () => {
    const dom = new DOMParser().parseFromString(
      '<xml>start <![CDATA[<encoded>]]> end<![CDATA[[[[[[[[[]]]]]]]]]]></xml>',
      'text/xml',
    );
    const root = dom.documentElement!;
    expect((root.firstChild as Text).data).toBe('start ');
    expect((root.firstChild!.nextSibling as CDATASection).data).toBe('<encoded>');
    expect((root.firstChild!.nextSibling!.nextSibling!.nextSibling as CDATASection).data).toBe('[[[[[[[[]]]]]]]]');
  });

  it('cdata empty', () => {
    const dom = new DOMParser().parseFromString('<xml><![CDATA[]]>start <![CDATA[]]> end</xml>', 'text/xml');
    const root = dom.documentElement!;
    expect(root.textContent).toBe('start  end');
  });

  it('comment', () => {
    const dom = new DOMParser().parseFromString('<xml><!-- comment&>< --></xml>', 'text/xml');
    const root = dom.documentElement!;
    expect(root.firstChild!.nodeValue).toBe(' comment&>< ');
  });

  it('cdata comment', () => {
    const dom = new DOMParser().parseFromString(
      '<xml>start <![CDATA[<encoded>]]> <!-- comment -->end</xml>',
      'text/xml',
    );
    const root = dom.documentElement!;
    expect(root.firstChild!.nodeValue).toBe('start ');
    expect(root.firstChild!.nextSibling!.nodeValue).toBe('<encoded>');
    expect(root.firstChild!.nextSibling!.nextSibling!.nextSibling!.nodeValue).toBe(' comment ');
    expect(root.firstChild!.nextSibling!.nextSibling!.nextSibling!.nextSibling!.nodeValue).toBe('end');
  });

  it('append node', () => {
    const dom = new DOMParser().parseFromString('<xml/>', 'text/xml');
    const child = dom.createElement('child');
    const root = dom.documentElement!;
    expect(child).toBe(root.appendChild(child));
    expect(child).toBe(root.firstChild);
    const fragment = dom.createDocumentFragment();
    expect(child).toBe(fragment.appendChild(child));
  });

  it('insert node', () => {
    const dom = new DOMParser().parseFromString('<xml><child/></xml>', 'text/xml');
    const sibling = dom.createElement('sibling');
    const child = dom.documentElement!.firstChild!;
    child.parentNode!.insertBefore(sibling, child);
    expect(sibling).toBe(child.previousSibling);
    expect(sibling.nextSibling).toBe(child);
    expect(sibling.parentNode).toBe(child.parentNode);
  });

  it('insert fragment', () => {
    const dom = new DOMParser().parseFromString('<xml><child/></xml>', 'text/xml');
    const fragment = dom.createDocumentFragment();
    expect(fragment.nodeType).toBe(Node.DOCUMENT_FRAGMENT_NODE);

    const first = fragment.appendChild(dom.createElement('first'));
    const last = fragment.appendChild(dom.createElement('last'));
    expect(fragment.firstChild).toBe(first);
    expect(fragment.lastChild).toBe(last);
    expect(last.previousSibling).toBe(first);
    expect(first.nextSibling).toBe(last);

    const child = dom.documentElement!.firstChild!;
    child.parentNode!.insertBefore(fragment, child);
    expect(last.previousSibling).toBe(first);
    expect(first.nextSibling).toBe(last);
    expect(child.parentNode!.firstChild).toBe(first);
    expect(last).toBe(child.previousSibling);
    expect(last.nextSibling).toBe(child);
    expect(first.parentNode).toBe(child.parentNode);
    expect(last.parentNode).toBe(child.parentNode);
  });

  it('instruction', () => {
    const source = '<?xml version="1.0" encoding="UTF-8"?><root><child>&amp;<!-- &amp; --></child></root>';
    const doc = new DOMParser().parseFromString(source, 'text/xml');
    const source2 = new XMLSerializer().serializeToString(doc);
    expect(source2).toBe(source);
  });
});

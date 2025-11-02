import { DOMParser } from '../..';

describe('Namespace parse tests', () => {
  it('uses default namespace', () => {
    const dom = new DOMParser().parseFromString('<xml xmlns="http://test.com"><child attr="1"/></xml>', 'text/xml');
    const root = dom.documentElement!;
    expect(root.namespaceURI).toBe('http://test.com');
    expect(root.lookupNamespaceURI('')).toBe('http://test.com');
    expect(root.firstElementChild!.namespaceURI).toBe('http://test.com');
    expect(root.firstChild!.lookupNamespaceURI('')).toBe('http://test.com');
    expect(root.firstElementChild!.getAttributeNode('attr')!.namespaceURI).toBe(null);
  });

  it('prefix namespace', () => {
    const dom = new DOMParser().parseFromString(
      '<xml xmlns:p1="http://p1.com" xmlns:p2="http://p2.com"><p1:child a="1" p1:attr="1" b="2"/><p2:child/></xml>',
      'text/xml',
    );
    const root = dom.documentElement!;
    expect(root.lookupNamespaceURI('p1')).toBe('http://p1.com');
    expect(root.firstElementChild!.namespaceURI).toBe('http://p1.com');
    expect(root.firstElementChild!.getAttributeNode('attr')).toBe(null);
    expect(root.firstElementChild!.getAttributeNode('p1:attr')!.namespaceURI).toBe('http://p1.com');
    expect(root.firstElementChild!.nextElementSibling!.namespaceURI).toBe('http://p2.com');
    expect(root.firstElementChild!.nextElementSibling!.lookupNamespaceURI('p2')).toBe('http://p2.com');
  });

  it('after prefix namespace', () => {
    const dom = new DOMParser().parseFromString(
      '<xml xmlns:p="http://test.com"><p:child xmlns:p="http://p.com"/><p:child/></xml>',
      'text/xml',
    );
    const root = dom.documentElement!;
    expect(root.firstElementChild!.namespaceURI).toBe('http://p.com');
    expect(root.lastElementChild!.namespaceURI).toBe('http://test.com');
    expect(root.firstChild!.nextSibling!.lookupNamespaceURI('p')).toBe('http://test.com');
  });
});

import { DOMParser } from '../..';

describe('Element tests', () => {
  it('getElementsByTagName', () => {
    const doc = new DOMParser().parseFromString(
      '<xml xmlns="http://test.com" xmlns:t="http://test.com" xmlns:t2="http://test2.com">' +
        '<t:test/><test/><t2:test/>' +
        '<child attr="1"><test><child attr="2"/></test></child>' +
        '<child attr="3"/></xml>',
      'text/xml',
    );
    let childs = doc.documentElement!.getElementsByTagName('child');
    expect(childs.item(0)!.getAttribute('attr')).toBe('1');
    expect(childs.item(1)!.getAttribute('attr')).toBe('2');
    expect(childs.item(2)!.getAttribute('attr')).toBe('3');
    expect(childs).toHaveLength(3);

    childs = doc.getElementsByTagName('child');
    expect(childs.item(0)!.getAttribute('attr')).toBe('1');
    expect(childs.item(1)!.getAttribute('attr')).toBe('2');
    expect(childs.item(2)!.getAttribute('attr')).toBe('3');
    expect(childs).toHaveLength(3);

    childs = doc.documentElement!.getElementsByTagName('*');

    const buf: string[] = [];
    for (const child of childs) {
      buf.push(child.tagName);
    }
    expect(childs).toHaveLength(7);

    const feed = new DOMParser().parseFromString('<feed><entry>foo</entry></feed>', 'text/xml');
    const entries = feed.documentElement!.getElementsByTagName('entry');
    expect(entries).toHaveLength(1);
    expect(entries[0].nodeName).toBe('ENTRY');
    expect(feed.documentElement!.childNodes.item(0)!.nodeName).toBe('ENTRY');
  });

  it('getElementsByTagNameNS', () => {
    const doc = new DOMParser().parseFromString(
      '<xml xmlns="http://test.com" xmlns:t="http://test.com" xmlns:t2="http://test2.com">' +
        '<t:test/><test/><t2:test/>' +
        '<child attr="1"><test><child attr="2"/></test></child>' +
        '<child attr="3"/></xml>',
      'text/xml',
    );

    let childs = doc.documentElement!.getElementsByTagNameNS('http://test.com', '*');
    expect(childs).toHaveLength(6);

    childs = doc.getElementsByTagNameNS('http://test.com', '*');
    expect(childs).toHaveLength(7);

    childs = doc.documentElement!.getElementsByTagNameNS('http://test.com', 'test');
    expect(childs).toHaveLength(3);

    childs = doc.getElementsByTagNameNS('http://test.com', 'test');
    expect(childs).toHaveLength(3);

    childs = doc.getElementsByTagNameNS('*', 'test');
    // console.log([].join.apply(childs,['\n@']))
    expect(childs).toHaveLength(4);

    childs = doc.documentElement!.getElementsByTagNameNS('*', 'test');
    // console.log(childs.length)
    expect(childs).toHaveLength(4);
  });

  it('getElementById', () => {
    const doc = new DOMParser().parseFromString(
      '<xml xmlns="http://test.com" id="root">' +
        '<child id="a1" title="1"><child id="a2"  title="2"/></child>' +
        '<child id="a1"   title="3"/></xml>',
      'text/xml',
    );
    expect(doc.getElementById('root')).toBeTruthy();
    expect(doc.getElementById('a1')!.getAttribute('title')).toBe('1');
    expect(doc.getElementById('a2')!.getAttribute('title')).toBe('2');
    expect(doc.getElementById('a2')!.getAttribute('title2')).toBeNull();
  });

  it('set textContent', () => {
    const doc = new DOMParser().parseFromString('<test><a/><b><c/></b></test>', 'text/xml');
    const a = doc.documentElement!.firstChild!;
    const b = a.nextSibling!;
    a.textContent = 'hello';
    expect(doc.documentElement!.outerHTML).toBe('<test><a>hello</a><b><c/></b></test>');
    b.textContent = 'there';
    expect(doc.documentElement!.outerHTML).toBe('<test><a>hello</a><b>there</b></test>');
    b.textContent = '';
    expect(doc.documentElement!.outerHTML).toBe('<test><a>hello</a><b/></test>');
    doc.documentElement!.textContent = 'bye';
    expect(doc.documentElement!.outerHTML).toBe('<test>bye</test>');
  });
});

import { DOMParser } from '../..';

describe('Serializer tests', () => {
  it('text node containing "]]>"', () => {
    const doc = new DOMParser().parseFromString('<test/>', 'text/xml');
    doc.documentElement!.appendChild(doc.createTextNode('hello ]]> there'));
    expect(doc.documentElement!.firstChild!.textContent).toBe('hello ]]> there');
  });
});

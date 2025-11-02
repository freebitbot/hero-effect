import { DOMParser } from '../..';

const slice = Array.prototype.slice;

describe('using slice on arraylike objects', () => {
  it('handles NodeList', () => {
    const dom = new DOMParser().parseFromString('<html><meta><link><img><br><hr><input></html>', 'text/html');
    const childNodes = dom.documentElement!.childNodes;
    expect(childNodes).toHaveLength(2);
    expect(slice.call(childNodes).filter(x => x)).toHaveLength(2);
  });

  it('handles HTMLCollection', () => {
    const dom = new DOMParser().parseFromString('<html><meta><link><img><br><hr><input></html>', 'text/html');
    const children = dom.documentElement!.children;
    expect(children).toHaveLength(2);
    expect(slice.call(children).filter(x => x)).toHaveLength(2);
  });

  it('handles NamedNodeMap', () => {
    const dom = new DOMParser().parseFromString('<html author="Caleb"></html>', 'text/html');
    const attributes = dom.documentElement!.attributes;
    expect(attributes).toHaveLength(1);
    expect(slice.call(attributes).filter(x => x)).toHaveLength(1);
  });

  it('handles output from document.getElementsByTagName', () => {
    const parser = new DOMParser();
    const document = parser.parseFromString(`<html><head></head><body><h1>Testing</h1></body></html>`, 'text/html');
    const results = document.getElementsByTagName('h1');
    expect(results).toHaveLength(1);
    expect(slice.call(results).filter(x => x)).toHaveLength(1);
  });
});

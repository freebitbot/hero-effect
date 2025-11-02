import DOMParser from '../../src/api/DOMParser';
import XMLSerializer from '../../src/api/XMLSerializer';

describe('Whitespace parse tests', () => {
  it('unclosed tag', () => {
    const doc = new DOMParser().parseFromString('<foo', 'text/xml');
    const hasError = doc.documentElement!.innerHTML.includes('document must contain a root element');
    expect(hasError).toBeTruthy();
  });

  it('document source', () => {
    const testSource = '<?xml version="1.0"?>\n<!--test-->\n<xml/>';
    const dom = new DOMParser().parseFromString(testSource, 'text/xml');
    expect(new XMLSerializer().serializeToString(dom)).toBe(testSource);
  });

  // it.skip('test', () => {
  //   const description = '<p>populaciji (< 0.1%), te se</p>';
  //   const doc = new DOMParser().parseFromString(description, 'text/html');
  //   console.log(doc.documentElement.innerHTML);
  // });
});

import DOMParser from '../../src/api/DOMParser';

describe('Unclosed comment tests', () => {
  it('unclosed comment', () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString('<!--', 'text/xml');
    const hasError = doc.documentElement!.innerHTML.includes('document must contain a root element');
    expect(hasError).toBeTruthy();
  });
});

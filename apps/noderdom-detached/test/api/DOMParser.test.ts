import DOMParser from '../../src/api/DOMParser';

describe('DOMParser', () => {
  it('should parse basic div with html parser', async () => {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString('<div>test</div>', 'text/html');
    expect(doc.documentElement!.innerHTML).toBe('<head></head><body><div>test</div></body>');
    expect(doc.documentElement!.outerHTML).toBe('<html><head></head><body><div>test</div></body></html>');
  });
});

import DOMParser from '../../src/api/DOMParser';

describe('HTML Normalizer tests', () => {
  it.skip('text & <', () => {
    let dom = new DOMParser().parseFromString('<div>&amp;&lt;123&456<789;&&</div>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<div>&amp;&lt;123&amp;456&lt;789;&amp;&amp;</div>');

    dom = new DOMParser().parseFromString('<div><123e>&<a<br/></div>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<div>&lt;123e>&amp;&lt;a<br/></div>');

    dom = new DOMParser().parseFromString('<div>&nbsp;&copy;&nbsp&copy</div>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<div>\u00a0\u00a9&amp;nbsp&amp;copy</div>');

    dom = new DOMParser().parseFromString('<html xmlns:x="1"><body/></html>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html xmlns:x="1"><body></body></html>');
  });

  it('attr', () => {
    let dom = new DOMParser().parseFromString('<html test="a<b && a>b && \'&amp;&&\'"/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html test="a<b &amp;&amp; a>b &amp;&amp; \'&amp;&amp;&amp;\'"><head></head><body></body></html>',
    );

    dom = new DOMParser().parseFromString('<div test="alert(\'<br/>\')"/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head></head><body><div test="alert(\'<br/>\')"></div></body></html>',
    );

    dom = new DOMParser().parseFromString('<div test="a<b&&a< c && a>d"></div>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head></head><body><div test="a<b&amp;&amp;a< c &amp;&amp; a>d"></div></body></html>',
    );

    dom = new DOMParser().parseFromString('<div a=& bb c d=123&&456/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head></head><body><div a="&amp;" bb="" c="" d="123&amp;&amp;456/"></div></body></html>',
    );

    dom = new DOMParser().parseFromString('<div a=& a="&\'\'" b/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html><head></head><body><div a="&amp;" b=""></div></body></html>');
  });

  it('attrQute', () => {
    let dom = new DOMParser().parseFromString('<html test="123"/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html test="123"><head></head><body></body></html>');

    dom = new DOMParser().parseFromString('<Label onClick=doClick..">Hello, World</Label>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head></head><body><label onclick="doClick..&quot;">Hello, World</label></body></html>',
    );
  });

  it('unclosed', () => {
    let dom = new DOMParser().parseFromString('<html><meta><link><img><br><hr><input></html>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head><meta><link></head><body><img><br><hr><input></body></html>',
    );

    dom = new DOMParser().parseFromString('<html title =1/2></html>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html title="1/2"><head></head><body></body></html>');

    dom = new DOMParser().parseFromString('<html title= 1/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html title="1/"><head></head><body></body></html>');

    dom = new DOMParser().parseFromString('<html title = 1/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html title="1/"><head></head><body></body></html>');

    dom = new DOMParser().parseFromString('<html title/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<html title=""><head></head><body></body></html>');

    dom = new DOMParser().parseFromString('<html><meta><link><img><br><hr><input></html>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe(
      '<html><head><meta><link></head><body><img><br><hr><input></body></html>',
    );
  });

  it.skip('script', () => {
    let dom = new DOMParser().parseFromString('<script>alert(a<b&&c?"<br>":">>");</script>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<script>alert(a<b&&c?"<br>":">>");</script>');

    dom = new DOMParser().parseFromString('<script>alert(a<b&&c?"<br>":">>");</script>', 'text/xml');
    expect(dom.documentElement!.outerHTML).toBe('<script>alert(a&lt;b&amp;&amp;c?"<br/>":">>");</script>');

    dom = new DOMParser().parseFromString('<script>alert(a<b&&c?"<br/>":">>");</script>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<script>alert(a<b&&c?"<br/>":">>");</script>');

    dom = new DOMParser().parseFromString('<script src="./test.js"/>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<script src="./test.js"></script>');
  });

  it.skip('textarea', () => {
    let dom = new DOMParser().parseFromString('<textarea>alert(a<b&&c?"<br>":">>");</textarea>', 'text/html');
    expect(dom.documentElement!.outerHTML).toBe('<textarea>alert(a&lt;b&amp;&amp;c?"&lt;br>":">>");</textarea>');

    dom = new DOMParser().parseFromString('<textarea>alert(a<b&&c?"<br>":">>");</textarea>', 'text/xml');
    expect(dom.documentElement!.outerHTML).toBe('<textarea>alert(a&lt;b&amp;&amp;c?"<br/>":">>");</textarea>');
  });
});

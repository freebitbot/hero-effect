import DOMParser from '../../src/api/DOMParser';

describe('Simple parse tests', () => {
  it('simple', () => {
    const parser = new DOMParser();
    const markup = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body title="1<2"></body></html>';
    const doc = parser.parseFromString(markup, 'text/html');
    expect(doc.documentElement!.outerHTML).toBe(markup);
  });

  it('unclosedFix', () => {
    const parser = new DOMParser();
    const fileContents = '<r><Page><Label /></Page  <Page></Page></r>';
    const doc = parser.parseFromString(fileContents, 'text/xml');
    expect(doc.documentElement!.nodeName).toBe('PARSERERROR');
  });

  it('test', () => {
    const parser = new DOMParser();
    const fileContents = '<Page><Label class="title"/></Page  1';
    const doc = parser.parseFromString(fileContents, 'text/xml');
    expect(doc.documentElement!.nodeName).toBe('PARSERERROR');
  });

  it('svg test', () => {
    const svgCase = [
      '<svg>',
      '  <metadata>...</metadata>',
      '  <defs id="defs14">',
      '  <path id="path4" d="M 68.589358,...-6.363961,-6.363964 z" />',
      '  <path id="path4" d="M 68.589358,...-6.363961,-6.363964 z" /></defs>',
      '</svg>',
    ].join('\n');
    const parser = new DOMParser();
    const dom = parser.parseFromString(svgCase, 'text/xml');
    expect(dom.documentElement!.outerHTML).toBe(svgCase.replace(/ \/>/g, '/>'));
  });
});

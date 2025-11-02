import { DOMParser } from '../..';
import { IDocumentFragment, IDocument } from '../../base/interfaces';

describe('Fragment tests', () => {
  it('append empty fragment', () => {
    const document = new DOMParser().parseFromString('<p id="p"/>', 'text/xml') as IDocument;
    const fragment = document.createDocumentFragment() as IDocumentFragment;
    document.getElementById('p')!.insertBefore(fragment, null);
    fragment.appendChild(document.createTextNode('a'));
    document.getElementById('p')!.insertBefore(fragment, null);
    expect(document.documentElement!.outerHTML).toBe('<p id="p">a</p>');
  });
});

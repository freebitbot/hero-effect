import { DOMParser } from '../..';

describe('Document tests', () => {
  it('getElementsByTagName', () => {
    const doc = new DOMParser().parseFromString('<a><b/></a>', 'text/xml');

    expect(doc.getElementsByTagName('*')).toHaveLength(2);
    expect(doc.documentElement!.getElementsByTagName('*')).toHaveLength(1);
  });
});

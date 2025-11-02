import { DOMParser } from '../..';

describe('Namespace tests', () => {
  it.skip('test', () => {
    // Just for debugging
    const w3 = 'http://www.w3.org/1999/xhtml';
    const n1 = 'http://www.frankston.com/public';
    const n2 = 'http://rmf.vc/n2';
    const hx = `<html test="a" xmlns="${w3}" xmlns:rmf="${n1}"><rmf:foo hello="asdfa"/></html>`;

    const doc = new DOMParser().parseFromString(hx, 'text/xml');
    // console.log(de.prefix,de.getAttributeNode('xmlns').prefix)
    const els = Array.from(doc.documentElement!.getElementsByTagNameNS(n1, 'foo'));
    for (let _i = 0, els1 = els; _i < els1.length; _i++) {
      const el = els1[_i];

      let te = doc.createElementNS(n1, 'test');
      te.setAttributeNS(n1, 'bar', 'valx');
      te = doc.createElementNS(n1, 'test');
      te.setAttributeNS(n1, 'bar', 'valx');
      // console.log("New Elm: " + ss(te));
      expect(te.outerHTML).toBe(`<test xmlns="${n1}" bar="valx"/>`);
      el.appendChild(te);
      const tx = doc.createElementNS(n2, 'test');
      tx.setAttributeNS(n2, 'bar', 'valx');
      // console.log("New Elm: " + String(tx));
      expect(tx.outerHTML).toBe(`<test xmlns="${n2}" bar="valx"/>`);
      el.appendChild(tx);
    }
  });
});

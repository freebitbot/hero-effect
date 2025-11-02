import { DOMParser } from '../..';
import { IElement, INodeList } from '../../base/interfaces';

const parser = new DOMParser();

describe('querySelector', () => {
  it.only('queries tag names', () => {
    const document = parser.parseFromString(`<html><head></head><body><h1>Testing</h1></body></html>`, 'text/html');
    const elements = document.querySelectorAll('h1') as INodeList<IElement>;
    expect(elements).toHaveLength(1);
    expect(elements[0].tagName).toBe('H1');
  });

  it('queries ids', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div id="first">Caleb</div><div id="last" class="last">Clark</div></body></html>`,
      'text/html',
    );
    const elements = document.querySelectorAll('#last') as INodeList<IElement>;
    expect(elements).toHaveLength(1);
    expect(elements[0].tagName).toBe('DIV');
  });

  it('queries classes', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div class="name">Caleb</div><div class="name">Clark</div></body></html>`,
      'text/html',
    );
    const elements = document.querySelectorAll('.name') as INodeList<IElement>;
    expect(elements).toHaveLength(2);
    expect(elements[1].tagName).toBe('DIV');
  });

  it('queries a combination of tags, ids and classes', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div id="first"><span class="initial">C</span>aleb</div><div class="last">Clark</div></body></html>`,
      'text/html',
    );
    const elements = document.querySelectorAll('body #first span.initial') as INodeList<IElement>;
    expect(elements).toHaveLength(1);
    expect(elements[0].tagName).toBe('SPAN');
  });
});

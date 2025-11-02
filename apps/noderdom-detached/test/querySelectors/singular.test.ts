import { DOMParser } from '../..';
import { IElement } from '../../base/interfaces';

const parser = new DOMParser();

describe('querySelector', () => {
  it('queries tag names', () => {
    const document = parser.parseFromString(`<html><head></head><body><h1>Testing</h1></body></html>`, 'text/html');
    const h1Element = document.querySelector('h1') as IElement;
    expect(h1Element).toBeTruthy();
    expect(h1Element.tagName).toBe('H1');
  });

  it('queries ids', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div id="first">Caleb</div><div id="last" class="last">Clark</div></body></html>`,
      'text/html',
    );
    const lastElement = document.querySelector('#last') as IElement;
    expect(lastElement).toBeTruthy();
    expect(lastElement.tagName).toBe('DIV');
  });

  it('queries classes', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div class="first">Caleb</div><div class="last">Clark</div></body></html>`,
      'text/html',
    );
    const lastElement = document.querySelector('.last') as IElement;
    expect(lastElement).toBeTruthy();
    expect(lastElement.tagName).toBe('DIV');
  });

  it('queries a combination of tags, ids and classes', () => {
    const document = parser.parseFromString(
      `<html><head></head><body><div id="first"><span class="initial">C</span>aleb</div><div class="last">Clark</div></body></html>`,
      'text/html',
    );
    const spanElement = document.querySelector('body #first span.initial') as IElement;
    expect(spanElement).toBeTruthy();
    expect(spanElement.tagName).toBe('SPAN');
  });
});

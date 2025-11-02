import { HTMLElementGenerator } from '../../base/classes/HTMLElement';
import { IHTMLElement } from '../../base/interfaces';
import Element from './Element';
import ElementCSSInlineStyle from '../../base/mixins/ElementCSSInlineStyle';
import ElementContentEditable from '../../base/mixins/ElementContentEditable';
import GlobalEventHandlers from '../../base/mixins/GlobalEventHandlers';
import HTMLOrSVGElement from '../../base/mixins/HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
const GeneratedHTMLElement = HTMLElementGenerator(
  Element,
  ElementCSSInlineStyle,
  ElementContentEditable,
  GlobalEventHandlers,
  HTMLOrSVGElement,
);

export default class HTMLElement extends GeneratedHTMLElement implements IHTMLElement {}

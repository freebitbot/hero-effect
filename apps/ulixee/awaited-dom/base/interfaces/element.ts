import type {
	IHTMLAnchorElement,
	IHTMLAreaElement,
	IHTMLAudioElement,
	IHTMLBaseElement,
	IHTMLBodyElement,
	IHTMLBRElement,
	IHTMLButtonElement,
	IHTMLCanvasElement,
	IHTMLDataElement,
	IHTMLDataListElement,
	IHTMLDetailsElement,
	IHTMLDialogElement,
	IHTMLDirectoryElement,
	IHTMLDivElement,
	IHTMLDListElement,
	IHTMLElement,
	IHTMLEmbedElement,
	IHTMLFieldSetElement,
	IHTMLFontElement,
	IHTMLFormElement,
	IHTMLFrameElement,
	IHTMLFrameSetElement,
	IHTMLHeadElement,
	IHTMLHeadingElement,
	IHTMLHRElement,
	IHTMLHtmlElement,
	IHTMLIFrameElement,
	IHTMLImageElement,
	IHTMLInputElement,
	IHTMLLabelElement,
	IHTMLLegendElement,
	IHTMLLIElement,
	IHTMLLinkElement,
	IHTMLMapElement,
	IHTMLMetaElement,
	IHTMLMeterElement,
	IHTMLModElement,
	IHTMLObjectElement,
	IHTMLOListElement,
	IHTMLOptGroupElement,
	IHTMLOptionElement,
	IHTMLParagraphElement,
	IHTMLParamElement,
	IHTMLPreElement,
	IHTMLProgressElement,
	IHTMLQuoteElement,
	IHTMLScriptElement,
	IHTMLSelectElement,
	IHTMLSlotElement,
	IHTMLSourceElement,
	IHTMLSpanElement,
	IHTMLStyleElement,
	IHTMLTableCaptionElement,
	IHTMLTableCellElement,
	IHTMLTableColElement,
	IHTMLTableElement,
	IHTMLTableRowElement,
	IHTMLTableSectionElement,
	IHTMLTemplateElement,
	IHTMLTextAreaElement,
	IHTMLTimeElement,
	IHTMLTitleElement,
	IHTMLTrackElement,
	IHTMLUListElement,
	IHTMLVideoElement,
} from "./official";
// tslint:disable: prettier
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface IHTMLElementTagNameMap {
	a: IHTMLAnchorElement;
	abbr: IHTMLElement;
	acronym: IHTMLElement;
	address: IHTMLElement;
	area: IHTMLAreaElement;
	article: IHTMLElement;
	aside: IHTMLElement;
	audio: IHTMLAudioElement;
	b: IHTMLElement;
	base: IHTMLBaseElement;
	bdi: IHTMLElement;
	bdo: IHTMLElement;
	big: IHTMLElement;
	blockquote: IHTMLQuoteElement;
	body: IHTMLBodyElement;
	br: IHTMLBRElement;
	button: IHTMLButtonElement;
	canvas: IHTMLCanvasElement;
	caption: IHTMLTableCaptionElement;
	center: IHTMLElement;
	cite: IHTMLElement;
	code: IHTMLElement;
	col: IHTMLTableColElement;
	colgroup: IHTMLTableColElement;
	data: IHTMLDataElement;
	datalist: IHTMLDataListElement;
	dd: IHTMLElement;
	del: IHTMLModElement;
	details: IHTMLDetailsElement;
	dfn: IHTMLElement;
	dialog: IHTMLDialogElement;
	dir: IHTMLDirectoryElement;
	div: IHTMLDivElement;
	dl: IHTMLDListElement;
	dt: IHTMLElement;
	em: IHTMLElement;
	embed: IHTMLEmbedElement;
	fieldset: IHTMLFieldSetElement;
	figcaption: IHTMLElement;
	figure: IHTMLElement;
	font: IHTMLFontElement;
	footer: IHTMLElement;
	form: IHTMLFormElement;
	frame: IHTMLFrameElement;
	frameset: IHTMLFrameSetElement;
	h1: IHTMLHeadingElement;
	h2: IHTMLHeadingElement;
	h3: IHTMLHeadingElement;
	h4: IHTMLHeadingElement;
	h5: IHTMLHeadingElement;
	h6: IHTMLHeadingElement;
	head: IHTMLHeadElement;
	header: IHTMLElement;
	hgroup: IHTMLElement;
	hr: IHTMLHRElement;
	html: IHTMLHtmlElement;
	i: IHTMLElement;
	iframe: IHTMLIFrameElement;
	img: IHTMLImageElement;
	input: IHTMLInputElement;
	ins: IHTMLModElement;
	kbd: IHTMLElement;
	keygen: IHTMLElement;
	label: IHTMLLabelElement;
	legend: IHTMLLegendElement;
	li: IHTMLLIElement;
	link: IHTMLLinkElement;
	main: IHTMLElement;
	map: IHTMLMapElement;
	mark: IHTMLElement;
	meta: IHTMLMetaElement;
	meter: IHTMLMeterElement;
	nav: IHTMLElement;
	nobr: IHTMLElement;
	noframes: IHTMLElement;
	noscript: IHTMLElement;
	object: IHTMLObjectElement;
	ol: IHTMLOListElement;
	optgroup: IHTMLOptGroupElement;
	option: IHTMLOptionElement;
	p: IHTMLParagraphElement;
	param: IHTMLParamElement;
	plaintext: IHTMLElement;
	pre: IHTMLPreElement;
	progress: IHTMLProgressElement;
	q: IHTMLQuoteElement;
	rp: IHTMLElement;
	rt: IHTMLElement;
	ruby: IHTMLElement;
	s: IHTMLElement;
	samp: IHTMLElement;
	script: IHTMLScriptElement;
	section: IHTMLElement;
	select: IHTMLSelectElement;
	slot: IHTMLSlotElement;
	small: IHTMLElement;
	source: IHTMLSourceElement;
	span: IHTMLSpanElement;
	strike: IHTMLElement;
	strong: IHTMLElement;
	style: IHTMLStyleElement;
	sub: IHTMLElement;
	summary: IHTMLElement;
	sup: IHTMLElement;
	table: IHTMLTableElement;
	tbody: IHTMLTableSectionElement;
	td: IHTMLTableCellElement;
	template: IHTMLTemplateElement;
	textarea: IHTMLTextAreaElement;
	tfoot: IHTMLTableSectionElement;
	th: IHTMLTableCellElement;
	thead: IHTMLTableSectionElement;
	time: IHTMLTimeElement;
	title: IHTMLTitleElement;
	tr: IHTMLTableRowElement;
	track: IHTMLTrackElement;
	tt: IHTMLElement;
	u: IHTMLElement;
	ul: IHTMLUListElement;
	var: IHTMLElement;
	video: IHTMLVideoElement;
	wbr: IHTMLElement;
}

export interface IHTMLElementDeprecatedTagNameMap {
	listing: IHTMLPreElement;
	xmp: IHTMLPreElement;
}

export type ISVGElementTagNameMap = {};

export type ISVGElementDeprecatedTagNameMap = {};

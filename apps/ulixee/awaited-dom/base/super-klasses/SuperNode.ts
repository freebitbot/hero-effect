import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IAttrIsolate,
	ICharacterDataIsolate,
	IDocumentFragmentIsolate,
	IDocumentIsolate,
	IDocumentTypeIsolate,
	IElementIsolate,
	IHTMLAnchorElementIsolate,
	IHTMLAreaElementIsolate,
	IHTMLAudioElementIsolate,
	IHTMLBaseElementIsolate,
	IHTMLBodyElementIsolate,
	IHTMLBRElementIsolate,
	IHTMLButtonElementIsolate,
	IHTMLCanvasElementIsolate,
	IHTMLDataElementIsolate,
	IHTMLDataListElementIsolate,
	IHTMLDetailsElementIsolate,
	IHTMLDialogElementIsolate,
	IHTMLDirectoryElementIsolate,
	IHTMLDivElementIsolate,
	IHTMLDListElementIsolate,
	IHTMLDocumentIsolate,
	IHTMLElementIsolate,
	IHTMLEmbedElementIsolate,
	IHTMLFieldSetElementIsolate,
	IHTMLFontElementIsolate,
	IHTMLFormElementIsolate,
	IHTMLFrameElementIsolate,
	IHTMLFrameSetElementIsolate,
	IHTMLHeadElementIsolate,
	IHTMLHeadingElementIsolate,
	IHTMLHRElementIsolate,
	IHTMLHtmlElementIsolate,
	IHTMLIFrameElementIsolate,
	IHTMLImageElementIsolate,
	IHTMLInputElementIsolate,
	IHTMLLabelElementIsolate,
	IHTMLLegendElementIsolate,
	IHTMLLIElementIsolate,
	IHTMLLinkElementIsolate,
	IHTMLMapElementIsolate,
	IHTMLMediaElementIsolate,
	IHTMLMetaElementIsolate,
	IHTMLMeterElementIsolate,
	IHTMLModElementIsolate,
	IHTMLObjectElementIsolate,
	IHTMLOListElementIsolate,
	IHTMLOptGroupElementIsolate,
	IHTMLOptionElementIsolate,
	IHTMLParagraphElementIsolate,
	IHTMLParamElementIsolate,
	IHTMLPreElementIsolate,
	IHTMLProgressElementIsolate,
	IHTMLQuoteElementIsolate,
	IHTMLScriptElementIsolate,
	IHTMLSelectElementIsolate,
	IHTMLSlotElementIsolate,
	IHTMLSourceElementIsolate,
	IHTMLSpanElementIsolate,
	IHTMLStyleElementIsolate,
	IHTMLTableCaptionElementIsolate,
	IHTMLTableCellElementIsolate,
	IHTMLTableColElementIsolate,
	IHTMLTableElementIsolate,
	IHTMLTableRowElementIsolate,
	IHTMLTableSectionElementIsolate,
	IHTMLTemplateElementIsolate,
	IHTMLTextAreaElementIsolate,
	IHTMLTimeElementIsolate,
	IHTMLTitleElementIsolate,
	IHTMLTrackElementIsolate,
	IHTMLUListElementIsolate,
	IHTMLVideoElementIsolate,
	INodeIsolate,
	IShadowRootIsolate,
	ITextIsolate,
} from "../interfaces/isolate";
import type {
	IDocumentOrShadowRoot,
	IElementContentEditable,
	IElementCSSInlineStyle,
	IGetRootNodeOptions,
	IHTMLHyperlinkElementUtils,
	IHTMLOrSVGElement,
	ILinkStyle,
	INonDocumentTypeChildNode,
	INonElementParentNode,
	IParentNode,
	ISlotable,
	IXPathEvaluatorBase,
} from "../interfaces/official";
import type {
	ISuperDocument,
	ISuperElement,
	ISuperNode,
	ISuperNodeList,
} from "../interfaces/super";
import {
	AttrIsolateConstantKeys,
	AttrIsolatePropertyKeys,
	type IAttrIsolateProperties,
} from "../isolate-mixins/AttrIsolate";
import {
	CharacterDataIsolateConstantKeys,
	CharacterDataIsolatePropertyKeys,
	type ICharacterDataIsolateProperties,
} from "../isolate-mixins/CharacterDataIsolate";
import {
	DocumentFragmentIsolateConstantKeys,
	DocumentFragmentIsolatePropertyKeys,
	type IDocumentFragmentIsolateProperties,
} from "../isolate-mixins/DocumentFragmentIsolate";
import {
	DocumentIsolateConstantKeys,
	DocumentIsolatePropertyKeys,
	type IDocumentIsolateProperties,
} from "../isolate-mixins/DocumentIsolate";
import {
	DocumentTypeIsolateConstantKeys,
	DocumentTypeIsolatePropertyKeys,
	type IDocumentTypeIsolateProperties,
} from "../isolate-mixins/DocumentTypeIsolate";
import {
	ElementIsolateConstantKeys,
	ElementIsolatePropertyKeys,
	type IElementIsolateProperties,
} from "../isolate-mixins/ElementIsolate";
import {
	HTMLAnchorElementIsolateConstantKeys,
	HTMLAnchorElementIsolatePropertyKeys,
	type IHTMLAnchorElementIsolateProperties,
} from "../isolate-mixins/HTMLAnchorElementIsolate";
import {
	HTMLAreaElementIsolateConstantKeys,
	HTMLAreaElementIsolatePropertyKeys,
	type IHTMLAreaElementIsolateProperties,
} from "../isolate-mixins/HTMLAreaElementIsolate";
import {
	HTMLAudioElementIsolateConstantKeys,
	HTMLAudioElementIsolatePropertyKeys,
	type IHTMLAudioElementIsolateProperties,
} from "../isolate-mixins/HTMLAudioElementIsolate";
import {
	HTMLBaseElementIsolateConstantKeys,
	HTMLBaseElementIsolatePropertyKeys,
	type IHTMLBaseElementIsolateProperties,
} from "../isolate-mixins/HTMLBaseElementIsolate";
import {
	HTMLBodyElementIsolateConstantKeys,
	HTMLBodyElementIsolatePropertyKeys,
	type IHTMLBodyElementIsolateProperties,
} from "../isolate-mixins/HTMLBodyElementIsolate";
import {
	HTMLBRElementIsolateConstantKeys,
	HTMLBRElementIsolatePropertyKeys,
	type IHTMLBRElementIsolateProperties,
} from "../isolate-mixins/HTMLBRElementIsolate";
import {
	HTMLButtonElementIsolateConstantKeys,
	HTMLButtonElementIsolatePropertyKeys,
	type IHTMLButtonElementIsolateProperties,
} from "../isolate-mixins/HTMLButtonElementIsolate";
import {
	HTMLCanvasElementIsolateConstantKeys,
	HTMLCanvasElementIsolatePropertyKeys,
	type IHTMLCanvasElementIsolateProperties,
} from "../isolate-mixins/HTMLCanvasElementIsolate";
import {
	HTMLDataElementIsolateConstantKeys,
	HTMLDataElementIsolatePropertyKeys,
	type IHTMLDataElementIsolateProperties,
} from "../isolate-mixins/HTMLDataElementIsolate";
import {
	HTMLDataListElementIsolateConstantKeys,
	HTMLDataListElementIsolatePropertyKeys,
	type IHTMLDataListElementIsolateProperties,
} from "../isolate-mixins/HTMLDataListElementIsolate";
import {
	HTMLDetailsElementIsolateConstantKeys,
	HTMLDetailsElementIsolatePropertyKeys,
	type IHTMLDetailsElementIsolateProperties,
} from "../isolate-mixins/HTMLDetailsElementIsolate";
import {
	HTMLDialogElementIsolateConstantKeys,
	HTMLDialogElementIsolatePropertyKeys,
	type IHTMLDialogElementIsolateProperties,
} from "../isolate-mixins/HTMLDialogElementIsolate";
import {
	HTMLDirectoryElementIsolateConstantKeys,
	HTMLDirectoryElementIsolatePropertyKeys,
	type IHTMLDirectoryElementIsolateProperties,
} from "../isolate-mixins/HTMLDirectoryElementIsolate";
import {
	HTMLDivElementIsolateConstantKeys,
	HTMLDivElementIsolatePropertyKeys,
	type IHTMLDivElementIsolateProperties,
} from "../isolate-mixins/HTMLDivElementIsolate";
import {
	HTMLDListElementIsolateConstantKeys,
	HTMLDListElementIsolatePropertyKeys,
	type IHTMLDListElementIsolateProperties,
} from "../isolate-mixins/HTMLDListElementIsolate";
import {
	HTMLDocumentIsolateConstantKeys,
	HTMLDocumentIsolatePropertyKeys,
	type IHTMLDocumentIsolateProperties,
} from "../isolate-mixins/HTMLDocumentIsolate";
import {
	HTMLElementIsolateConstantKeys,
	HTMLElementIsolatePropertyKeys,
	type IHTMLElementIsolateProperties,
} from "../isolate-mixins/HTMLElementIsolate";
import {
	HTMLEmbedElementIsolateConstantKeys,
	HTMLEmbedElementIsolatePropertyKeys,
	type IHTMLEmbedElementIsolateProperties,
} from "../isolate-mixins/HTMLEmbedElementIsolate";
import {
	HTMLFieldSetElementIsolateConstantKeys,
	HTMLFieldSetElementIsolatePropertyKeys,
	type IHTMLFieldSetElementIsolateProperties,
} from "../isolate-mixins/HTMLFieldSetElementIsolate";
import {
	HTMLFontElementIsolateConstantKeys,
	HTMLFontElementIsolatePropertyKeys,
	type IHTMLFontElementIsolateProperties,
} from "../isolate-mixins/HTMLFontElementIsolate";
import {
	HTMLFormElementIsolateConstantKeys,
	HTMLFormElementIsolatePropertyKeys,
	type IHTMLFormElementIsolateProperties,
} from "../isolate-mixins/HTMLFormElementIsolate";
import {
	HTMLFrameElementIsolateConstantKeys,
	HTMLFrameElementIsolatePropertyKeys,
	type IHTMLFrameElementIsolateProperties,
} from "../isolate-mixins/HTMLFrameElementIsolate";
import {
	HTMLFrameSetElementIsolateConstantKeys,
	HTMLFrameSetElementIsolatePropertyKeys,
	type IHTMLFrameSetElementIsolateProperties,
} from "../isolate-mixins/HTMLFrameSetElementIsolate";
import {
	HTMLHeadElementIsolateConstantKeys,
	HTMLHeadElementIsolatePropertyKeys,
	type IHTMLHeadElementIsolateProperties,
} from "../isolate-mixins/HTMLHeadElementIsolate";
import {
	HTMLHeadingElementIsolateConstantKeys,
	HTMLHeadingElementIsolatePropertyKeys,
	type IHTMLHeadingElementIsolateProperties,
} from "../isolate-mixins/HTMLHeadingElementIsolate";
import {
	HTMLHRElementIsolateConstantKeys,
	HTMLHRElementIsolatePropertyKeys,
	type IHTMLHRElementIsolateProperties,
} from "../isolate-mixins/HTMLHRElementIsolate";
import {
	HTMLHtmlElementIsolateConstantKeys,
	HTMLHtmlElementIsolatePropertyKeys,
	type IHTMLHtmlElementIsolateProperties,
} from "../isolate-mixins/HTMLHtmlElementIsolate";
import {
	HTMLIFrameElementIsolateConstantKeys,
	HTMLIFrameElementIsolatePropertyKeys,
	type IHTMLIFrameElementIsolateProperties,
} from "../isolate-mixins/HTMLIFrameElementIsolate";
import {
	HTMLImageElementIsolateConstantKeys,
	HTMLImageElementIsolatePropertyKeys,
	type IHTMLImageElementIsolateProperties,
} from "../isolate-mixins/HTMLImageElementIsolate";
import {
	HTMLInputElementIsolateConstantKeys,
	HTMLInputElementIsolatePropertyKeys,
	type IHTMLInputElementIsolateProperties,
} from "../isolate-mixins/HTMLInputElementIsolate";
import {
	HTMLLabelElementIsolateConstantKeys,
	HTMLLabelElementIsolatePropertyKeys,
	type IHTMLLabelElementIsolateProperties,
} from "../isolate-mixins/HTMLLabelElementIsolate";
import {
	HTMLLegendElementIsolateConstantKeys,
	HTMLLegendElementIsolatePropertyKeys,
	type IHTMLLegendElementIsolateProperties,
} from "../isolate-mixins/HTMLLegendElementIsolate";
import {
	HTMLLIElementIsolateConstantKeys,
	HTMLLIElementIsolatePropertyKeys,
	type IHTMLLIElementIsolateProperties,
} from "../isolate-mixins/HTMLLIElementIsolate";
import {
	HTMLLinkElementIsolateConstantKeys,
	HTMLLinkElementIsolatePropertyKeys,
	type IHTMLLinkElementIsolateProperties,
} from "../isolate-mixins/HTMLLinkElementIsolate";
import {
	HTMLMapElementIsolateConstantKeys,
	HTMLMapElementIsolatePropertyKeys,
	type IHTMLMapElementIsolateProperties,
} from "../isolate-mixins/HTMLMapElementIsolate";
import {
	HTMLMediaElementIsolateConstantKeys,
	HTMLMediaElementIsolatePropertyKeys,
	type IHTMLMediaElementIsolateProperties,
} from "../isolate-mixins/HTMLMediaElementIsolate";
import {
	HTMLMetaElementIsolateConstantKeys,
	HTMLMetaElementIsolatePropertyKeys,
	type IHTMLMetaElementIsolateProperties,
} from "../isolate-mixins/HTMLMetaElementIsolate";
import {
	HTMLMeterElementIsolateConstantKeys,
	HTMLMeterElementIsolatePropertyKeys,
	type IHTMLMeterElementIsolateProperties,
} from "../isolate-mixins/HTMLMeterElementIsolate";
import {
	HTMLModElementIsolateConstantKeys,
	HTMLModElementIsolatePropertyKeys,
	type IHTMLModElementIsolateProperties,
} from "../isolate-mixins/HTMLModElementIsolate";
import {
	HTMLObjectElementIsolateConstantKeys,
	HTMLObjectElementIsolatePropertyKeys,
	type IHTMLObjectElementIsolateProperties,
} from "../isolate-mixins/HTMLObjectElementIsolate";
import {
	HTMLOListElementIsolateConstantKeys,
	HTMLOListElementIsolatePropertyKeys,
	type IHTMLOListElementIsolateProperties,
} from "../isolate-mixins/HTMLOListElementIsolate";
import {
	HTMLOptGroupElementIsolateConstantKeys,
	HTMLOptGroupElementIsolatePropertyKeys,
	type IHTMLOptGroupElementIsolateProperties,
} from "../isolate-mixins/HTMLOptGroupElementIsolate";
import {
	HTMLOptionElementIsolateConstantKeys,
	HTMLOptionElementIsolatePropertyKeys,
	type IHTMLOptionElementIsolateProperties,
} from "../isolate-mixins/HTMLOptionElementIsolate";
import {
	HTMLParagraphElementIsolateConstantKeys,
	HTMLParagraphElementIsolatePropertyKeys,
	type IHTMLParagraphElementIsolateProperties,
} from "../isolate-mixins/HTMLParagraphElementIsolate";
import {
	HTMLParamElementIsolateConstantKeys,
	HTMLParamElementIsolatePropertyKeys,
	type IHTMLParamElementIsolateProperties,
} from "../isolate-mixins/HTMLParamElementIsolate";
import {
	HTMLPreElementIsolateConstantKeys,
	HTMLPreElementIsolatePropertyKeys,
	type IHTMLPreElementIsolateProperties,
} from "../isolate-mixins/HTMLPreElementIsolate";
import {
	HTMLProgressElementIsolateConstantKeys,
	HTMLProgressElementIsolatePropertyKeys,
	type IHTMLProgressElementIsolateProperties,
} from "../isolate-mixins/HTMLProgressElementIsolate";
import {
	HTMLQuoteElementIsolateConstantKeys,
	HTMLQuoteElementIsolatePropertyKeys,
	type IHTMLQuoteElementIsolateProperties,
} from "../isolate-mixins/HTMLQuoteElementIsolate";
import {
	HTMLScriptElementIsolateConstantKeys,
	HTMLScriptElementIsolatePropertyKeys,
	type IHTMLScriptElementIsolateProperties,
} from "../isolate-mixins/HTMLScriptElementIsolate";
import {
	HTMLSelectElementIsolateConstantKeys,
	HTMLSelectElementIsolatePropertyKeys,
	type IHTMLSelectElementIsolateProperties,
} from "../isolate-mixins/HTMLSelectElementIsolate";
import {
	HTMLSlotElementIsolateConstantKeys,
	HTMLSlotElementIsolatePropertyKeys,
	type IHTMLSlotElementIsolateProperties,
} from "../isolate-mixins/HTMLSlotElementIsolate";
import {
	HTMLSourceElementIsolateConstantKeys,
	HTMLSourceElementIsolatePropertyKeys,
	type IHTMLSourceElementIsolateProperties,
} from "../isolate-mixins/HTMLSourceElementIsolate";
import {
	HTMLSpanElementIsolateConstantKeys,
	HTMLSpanElementIsolatePropertyKeys,
	type IHTMLSpanElementIsolateProperties,
} from "../isolate-mixins/HTMLSpanElementIsolate";
import {
	HTMLStyleElementIsolateConstantKeys,
	HTMLStyleElementIsolatePropertyKeys,
	type IHTMLStyleElementIsolateProperties,
} from "../isolate-mixins/HTMLStyleElementIsolate";
import {
	HTMLTableCaptionElementIsolateConstantKeys,
	HTMLTableCaptionElementIsolatePropertyKeys,
	type IHTMLTableCaptionElementIsolateProperties,
} from "../isolate-mixins/HTMLTableCaptionElementIsolate";
import {
	HTMLTableCellElementIsolateConstantKeys,
	HTMLTableCellElementIsolatePropertyKeys,
	type IHTMLTableCellElementIsolateProperties,
} from "../isolate-mixins/HTMLTableCellElementIsolate";
import {
	HTMLTableColElementIsolateConstantKeys,
	HTMLTableColElementIsolatePropertyKeys,
	type IHTMLTableColElementIsolateProperties,
} from "../isolate-mixins/HTMLTableColElementIsolate";
import {
	HTMLTableElementIsolateConstantKeys,
	HTMLTableElementIsolatePropertyKeys,
	type IHTMLTableElementIsolateProperties,
} from "../isolate-mixins/HTMLTableElementIsolate";
import {
	HTMLTableRowElementIsolateConstantKeys,
	HTMLTableRowElementIsolatePropertyKeys,
	type IHTMLTableRowElementIsolateProperties,
} from "../isolate-mixins/HTMLTableRowElementIsolate";
import {
	HTMLTableSectionElementIsolateConstantKeys,
	HTMLTableSectionElementIsolatePropertyKeys,
	type IHTMLTableSectionElementIsolateProperties,
} from "../isolate-mixins/HTMLTableSectionElementIsolate";
import {
	HTMLTemplateElementIsolateConstantKeys,
	HTMLTemplateElementIsolatePropertyKeys,
	type IHTMLTemplateElementIsolateProperties,
} from "../isolate-mixins/HTMLTemplateElementIsolate";
import {
	HTMLTextAreaElementIsolateConstantKeys,
	HTMLTextAreaElementIsolatePropertyKeys,
	type IHTMLTextAreaElementIsolateProperties,
} from "../isolate-mixins/HTMLTextAreaElementIsolate";
import {
	HTMLTimeElementIsolateConstantKeys,
	HTMLTimeElementIsolatePropertyKeys,
	type IHTMLTimeElementIsolateProperties,
} from "../isolate-mixins/HTMLTimeElementIsolate";
import {
	HTMLTitleElementIsolateConstantKeys,
	HTMLTitleElementIsolatePropertyKeys,
	type IHTMLTitleElementIsolateProperties,
} from "../isolate-mixins/HTMLTitleElementIsolate";
import {
	HTMLTrackElementIsolateConstantKeys,
	HTMLTrackElementIsolatePropertyKeys,
	type IHTMLTrackElementIsolateProperties,
} from "../isolate-mixins/HTMLTrackElementIsolate";
import {
	HTMLUListElementIsolateConstantKeys,
	HTMLUListElementIsolatePropertyKeys,
	type IHTMLUListElementIsolateProperties,
} from "../isolate-mixins/HTMLUListElementIsolate";
import {
	HTMLVideoElementIsolateConstantKeys,
	HTMLVideoElementIsolatePropertyKeys,
	type IHTMLVideoElementIsolateProperties,
} from "../isolate-mixins/HTMLVideoElementIsolate";
import {
	type INodeIsolateProperties,
	NodeIsolateConstantKeys,
	NodeIsolatePropertyKeys,
} from "../isolate-mixins/NodeIsolate";
import {
	type IShadowRootIsolateProperties,
	ShadowRootIsolateConstantKeys,
	ShadowRootIsolatePropertyKeys,
} from "../isolate-mixins/ShadowRootIsolate";
import {
	type ITextIsolateProperties,
	TextIsolateConstantKeys,
	TextIsolatePropertyKeys,
} from "../isolate-mixins/TextIsolate";
import NodeFactory from "../NodeFactory";
import {
	DocumentOrShadowRootConstantKeys,
	DocumentOrShadowRootPropertyKeys,
	type IDocumentOrShadowRootProperties,
} from "../official-mixins/DocumentOrShadowRoot";
import {
	ElementContentEditableConstantKeys,
	ElementContentEditablePropertyKeys,
	type IElementContentEditableProperties,
} from "../official-mixins/ElementContentEditable";
import {
	ElementCSSInlineStyleConstantKeys,
	ElementCSSInlineStylePropertyKeys,
	type IElementCSSInlineStyleProperties,
} from "../official-mixins/ElementCSSInlineStyle";
import {
	HTMLHyperlinkElementUtilsConstantKeys,
	HTMLHyperlinkElementUtilsPropertyKeys,
	type IHTMLHyperlinkElementUtilsProperties,
} from "../official-mixins/HTMLHyperlinkElementUtils";
import {
	HTMLOrSVGElementConstantKeys,
	HTMLOrSVGElementPropertyKeys,
	type IHTMLOrSVGElementProperties,
} from "../official-mixins/HTMLOrSVGElement";
import {
	type ILinkStyleProperties,
	LinkStyleConstantKeys,
	LinkStylePropertyKeys,
} from "../official-mixins/LinkStyle";
import {
	type INonDocumentTypeChildNodeProperties,
	NonDocumentTypeChildNodeConstantKeys,
	NonDocumentTypeChildNodePropertyKeys,
} from "../official-mixins/NonDocumentTypeChildNode";
import {
	type INonElementParentNodeProperties,
	NonElementParentNodeConstantKeys,
	NonElementParentNodePropertyKeys,
} from "../official-mixins/NonElementParentNode";
import {
	type IParentNodeProperties,
	ParentNodeConstantKeys,
	ParentNodePropertyKeys,
} from "../official-mixins/ParentNode";
import {
	type ISlotableProperties,
	SlotableConstantKeys,
	SlotablePropertyKeys,
} from "../official-mixins/Slotable";
import {
	type IXPathEvaluatorBaseProperties,
	XPathEvaluatorBaseConstantKeys,
	XPathEvaluatorBasePropertyKeys,
} from "../official-mixins/XPathEvaluatorBase";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISuperNode,
	ISuperNodeProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperNode>(
	"SuperNode",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<ISuperNode>(
	getState,
	setState,
	awaitedHandler,
);

export function SuperNodeGenerator(
	AttrIsolate: Constructable<IAttrIsolate>,
	CharacterDataIsolate: Constructable<ICharacterDataIsolate>,
	DocumentFragmentIsolate: Constructable<IDocumentFragmentIsolate>,
	DocumentIsolate: Constructable<IDocumentIsolate>,
	DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>,
	DocumentTypeIsolate: Constructable<IDocumentTypeIsolate>,
	ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>,
	ElementContentEditable: Constructable<IElementContentEditable>,
	ElementIsolate: Constructable<IElementIsolate>,
	HTMLAnchorElementIsolate: Constructable<IHTMLAnchorElementIsolate>,
	HTMLAreaElementIsolate: Constructable<IHTMLAreaElementIsolate>,
	HTMLAudioElementIsolate: Constructable<IHTMLAudioElementIsolate>,
	HTMLBRElementIsolate: Constructable<IHTMLBRElementIsolate>,
	HTMLBaseElementIsolate: Constructable<IHTMLBaseElementIsolate>,
	HTMLBodyElementIsolate: Constructable<IHTMLBodyElementIsolate>,
	HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>,
	HTMLCanvasElementIsolate: Constructable<IHTMLCanvasElementIsolate>,
	HTMLDListElementIsolate: Constructable<IHTMLDListElementIsolate>,
	HTMLDataElementIsolate: Constructable<IHTMLDataElementIsolate>,
	HTMLDataListElementIsolate: Constructable<IHTMLDataListElementIsolate>,
	HTMLDetailsElementIsolate: Constructable<IHTMLDetailsElementIsolate>,
	HTMLDialogElementIsolate: Constructable<IHTMLDialogElementIsolate>,
	HTMLDirectoryElementIsolate: Constructable<IHTMLDirectoryElementIsolate>,
	HTMLDivElementIsolate: Constructable<IHTMLDivElementIsolate>,
	HTMLDocumentIsolate: Constructable<IHTMLDocumentIsolate>,
	HTMLElementIsolate: Constructable<IHTMLElementIsolate>,
	HTMLEmbedElementIsolate: Constructable<IHTMLEmbedElementIsolate>,
	HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>,
	HTMLFontElementIsolate: Constructable<IHTMLFontElementIsolate>,
	HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>,
	HTMLFrameElementIsolate: Constructable<IHTMLFrameElementIsolate>,
	HTMLFrameSetElementIsolate: Constructable<IHTMLFrameSetElementIsolate>,
	HTMLHRElementIsolate: Constructable<IHTMLHRElementIsolate>,
	HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>,
	HTMLHeadingElementIsolate: Constructable<IHTMLHeadingElementIsolate>,
	HTMLHtmlElementIsolate: Constructable<IHTMLHtmlElementIsolate>,
	HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>,
	HTMLIFrameElementIsolate: Constructable<IHTMLIFrameElementIsolate>,
	HTMLImageElementIsolate: Constructable<IHTMLImageElementIsolate>,
	HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>,
	HTMLLIElementIsolate: Constructable<IHTMLLIElementIsolate>,
	HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>,
	HTMLLegendElementIsolate: Constructable<IHTMLLegendElementIsolate>,
	HTMLLinkElementIsolate: Constructable<IHTMLLinkElementIsolate>,
	HTMLMapElementIsolate: Constructable<IHTMLMapElementIsolate>,
	HTMLMediaElementIsolate: Constructable<IHTMLMediaElementIsolate>,
	HTMLMetaElementIsolate: Constructable<IHTMLMetaElementIsolate>,
	HTMLMeterElementIsolate: Constructable<IHTMLMeterElementIsolate>,
	HTMLModElementIsolate: Constructable<IHTMLModElementIsolate>,
	HTMLOListElementIsolate: Constructable<IHTMLOListElementIsolate>,
	HTMLObjectElementIsolate: Constructable<IHTMLObjectElementIsolate>,
	HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>,
	HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>,
	HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>,
	HTMLParagraphElementIsolate: Constructable<IHTMLParagraphElementIsolate>,
	HTMLParamElementIsolate: Constructable<IHTMLParamElementIsolate>,
	HTMLPreElementIsolate: Constructable<IHTMLPreElementIsolate>,
	HTMLProgressElementIsolate: Constructable<IHTMLProgressElementIsolate>,
	HTMLQuoteElementIsolate: Constructable<IHTMLQuoteElementIsolate>,
	HTMLScriptElementIsolate: Constructable<IHTMLScriptElementIsolate>,
	HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>,
	HTMLSlotElementIsolate: Constructable<IHTMLSlotElementIsolate>,
	HTMLSourceElementIsolate: Constructable<IHTMLSourceElementIsolate>,
	HTMLSpanElementIsolate: Constructable<IHTMLSpanElementIsolate>,
	HTMLStyleElementIsolate: Constructable<IHTMLStyleElementIsolate>,
	HTMLTableCaptionElementIsolate: Constructable<IHTMLTableCaptionElementIsolate>,
	HTMLTableCellElementIsolate: Constructable<IHTMLTableCellElementIsolate>,
	HTMLTableColElementIsolate: Constructable<IHTMLTableColElementIsolate>,
	HTMLTableElementIsolate: Constructable<IHTMLTableElementIsolate>,
	HTMLTableRowElementIsolate: Constructable<IHTMLTableRowElementIsolate>,
	HTMLTableSectionElementIsolate: Constructable<IHTMLTableSectionElementIsolate>,
	HTMLTemplateElementIsolate: Constructable<IHTMLTemplateElementIsolate>,
	HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>,
	HTMLTimeElementIsolate: Constructable<IHTMLTimeElementIsolate>,
	HTMLTitleElementIsolate: Constructable<IHTMLTitleElementIsolate>,
	HTMLTrackElementIsolate: Constructable<IHTMLTrackElementIsolate>,
	HTMLUListElementIsolate: Constructable<IHTMLUListElementIsolate>,
	HTMLVideoElementIsolate: Constructable<IHTMLVideoElementIsolate>,
	LinkStyle: Constructable<ILinkStyle>,
	NodeIsolate: Constructable<INodeIsolate>,
	NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>,
	NonElementParentNode: Constructable<INonElementParentNode>,
	ParentNode: Constructable<IParentNode>,
	ShadowRootIsolate: Constructable<IShadowRootIsolate>,
	Slotable: Constructable<ISlotable>,
	TextIsolate: Constructable<ITextIsolate>,
	XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>,
) {
	const Parent = ClassMixer(AttrIsolate, [
		CharacterDataIsolate,
		DocumentFragmentIsolate,
		DocumentIsolate,
		DocumentOrShadowRoot,
		DocumentTypeIsolate,
		ElementCSSInlineStyle,
		ElementContentEditable,
		ElementIsolate,
		HTMLAnchorElementIsolate,
		HTMLAreaElementIsolate,
		HTMLAudioElementIsolate,
		HTMLBRElementIsolate,
		HTMLBaseElementIsolate,
		HTMLBodyElementIsolate,
		HTMLButtonElementIsolate,
		HTMLCanvasElementIsolate,
		HTMLDListElementIsolate,
		HTMLDataElementIsolate,
		HTMLDataListElementIsolate,
		HTMLDetailsElementIsolate,
		HTMLDialogElementIsolate,
		HTMLDirectoryElementIsolate,
		HTMLDivElementIsolate,
		HTMLDocumentIsolate,
		HTMLElementIsolate,
		HTMLEmbedElementIsolate,
		HTMLFieldSetElementIsolate,
		HTMLFontElementIsolate,
		HTMLFormElementIsolate,
		HTMLFrameElementIsolate,
		HTMLFrameSetElementIsolate,
		HTMLHRElementIsolate,
		HTMLHeadElementIsolate,
		HTMLHeadingElementIsolate,
		HTMLHtmlElementIsolate,
		HTMLHyperlinkElementUtils,
		HTMLIFrameElementIsolate,
		HTMLImageElementIsolate,
		HTMLInputElementIsolate,
		HTMLLIElementIsolate,
		HTMLLabelElementIsolate,
		HTMLLegendElementIsolate,
		HTMLLinkElementIsolate,
		HTMLMapElementIsolate,
		HTMLMediaElementIsolate,
		HTMLMetaElementIsolate,
		HTMLMeterElementIsolate,
		HTMLModElementIsolate,
		HTMLOListElementIsolate,
		HTMLObjectElementIsolate,
		HTMLOptGroupElementIsolate,
		HTMLOptionElementIsolate,
		HTMLOrSVGElement,
		HTMLParagraphElementIsolate,
		HTMLParamElementIsolate,
		HTMLPreElementIsolate,
		HTMLProgressElementIsolate,
		HTMLQuoteElementIsolate,
		HTMLScriptElementIsolate,
		HTMLSelectElementIsolate,
		HTMLSlotElementIsolate,
		HTMLSourceElementIsolate,
		HTMLSpanElementIsolate,
		HTMLStyleElementIsolate,
		HTMLTableCaptionElementIsolate,
		HTMLTableCellElementIsolate,
		HTMLTableColElementIsolate,
		HTMLTableElementIsolate,
		HTMLTableRowElementIsolate,
		HTMLTableSectionElementIsolate,
		HTMLTemplateElementIsolate,
		HTMLTextAreaElementIsolate,
		HTMLTimeElementIsolate,
		HTMLTitleElementIsolate,
		HTMLTrackElementIsolate,
		HTMLUListElementIsolate,
		HTMLVideoElementIsolate,
		LinkStyle,
		NodeIsolate,
		NonDocumentTypeChildNode,
		NonElementParentNode,
		ParentNode,
		ShadowRootIsolate,
		Slotable,
		TextIsolate,
		XPathEvaluatorBase,
	]) as unknown as Constructable<
		IAttrIsolate &
			ICharacterDataIsolate &
			IDocumentFragmentIsolate &
			IDocumentIsolate &
			IDocumentOrShadowRoot &
			IDocumentTypeIsolate &
			IElementCSSInlineStyle &
			IElementContentEditable &
			IElementIsolate &
			IHTMLAnchorElementIsolate &
			IHTMLAreaElementIsolate &
			IHTMLAudioElementIsolate &
			IHTMLBRElementIsolate &
			IHTMLBaseElementIsolate &
			IHTMLBodyElementIsolate &
			IHTMLButtonElementIsolate &
			IHTMLCanvasElementIsolate &
			IHTMLDListElementIsolate &
			IHTMLDataElementIsolate &
			IHTMLDataListElementIsolate &
			IHTMLDetailsElementIsolate &
			IHTMLDialogElementIsolate &
			IHTMLDirectoryElementIsolate &
			IHTMLDivElementIsolate &
			IHTMLDocumentIsolate &
			IHTMLElementIsolate &
			IHTMLEmbedElementIsolate &
			IHTMLFieldSetElementIsolate &
			IHTMLFontElementIsolate &
			IHTMLFormElementIsolate &
			IHTMLFrameElementIsolate &
			IHTMLFrameSetElementIsolate &
			IHTMLHRElementIsolate &
			IHTMLHeadElementIsolate &
			IHTMLHeadingElementIsolate &
			IHTMLHtmlElementIsolate &
			IHTMLHyperlinkElementUtils &
			IHTMLIFrameElementIsolate &
			IHTMLImageElementIsolate &
			IHTMLInputElementIsolate &
			IHTMLLIElementIsolate &
			IHTMLLabelElementIsolate &
			IHTMLLegendElementIsolate &
			IHTMLLinkElementIsolate &
			IHTMLMapElementIsolate &
			IHTMLMediaElementIsolate &
			IHTMLMetaElementIsolate &
			IHTMLMeterElementIsolate &
			IHTMLModElementIsolate &
			IHTMLOListElementIsolate &
			IHTMLObjectElementIsolate &
			IHTMLOptGroupElementIsolate &
			IHTMLOptionElementIsolate &
			IHTMLOrSVGElement &
			IHTMLParagraphElementIsolate &
			IHTMLParamElementIsolate &
			IHTMLPreElementIsolate &
			IHTMLProgressElementIsolate &
			IHTMLQuoteElementIsolate &
			IHTMLScriptElementIsolate &
			IHTMLSelectElementIsolate &
			IHTMLSlotElementIsolate &
			IHTMLSourceElementIsolate &
			IHTMLSpanElementIsolate &
			IHTMLStyleElementIsolate &
			IHTMLTableCaptionElementIsolate &
			IHTMLTableCellElementIsolate &
			IHTMLTableColElementIsolate &
			IHTMLTableElementIsolate &
			IHTMLTableRowElementIsolate &
			IHTMLTableSectionElementIsolate &
			IHTMLTemplateElementIsolate &
			IHTMLTextAreaElementIsolate &
			IHTMLTimeElementIsolate &
			IHTMLTitleElementIsolate &
			IHTMLTrackElementIsolate &
			IHTMLUListElementIsolate &
			IHTMLVideoElementIsolate &
			ILinkStyle &
			INodeIsolate &
			INonDocumentTypeChildNode &
			INonElementParentNode &
			IParentNode &
			IShadowRootIsolate &
			ISlotable &
			ITextIsolate &
			IXPathEvaluatorBase
	>;

	return class SuperNode
		extends Parent
		implements ISuperNode, PromiseLike<ISuperNode>
	{
		public static readonly ATTRIBUTE_NODE: number = 2;
		public static readonly CDATA_SECTION_NODE: number = 4;
		public static readonly COMMENT_NODE: number = 8;
		public static readonly DOCUMENT_FRAGMENT_NODE: number = 11;
		public static readonly DOCUMENT_NODE: number = 9;
		public static readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
		public static readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
		public static readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
		public static readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
		public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number =
			0x20;
		public static readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
		public static readonly DOCUMENT_TYPE_NODE: number = 10;
		public static readonly ELEMENT_NODE: number = 1;
		public static readonly ENTITY_NODE: number = 6;
		public static readonly ENTITY_REFERENCE_NODE: number = 5;
		public static readonly NOTATION_NODE: number = 12;
		public static readonly PROCESSING_INSTRUCTION_NODE: number = 7;
		public static readonly TEXT_NODE: number = 3;

		public readonly ATTRIBUTE_NODE: number = 2;
		public readonly CDATA_SECTION_NODE: number = 4;
		public readonly COMMENT_NODE: number = 8;
		public readonly DOCUMENT_FRAGMENT_NODE: number = 11;
		public readonly DOCUMENT_NODE: number = 9;
		public readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
		public readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
		public readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
		public readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
		public readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
		public readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
		public readonly DOCUMENT_TYPE_NODE: number = 10;
		public readonly ELEMENT_NODE: number = 1;
		public readonly ENTITY_NODE: number = 6;
		public readonly ENTITY_REFERENCE_NODE: number = 5;
		public readonly NOTATION_NODE: number = 12;
		public readonly PROCESSING_INSTRUCTION_NODE: number = 7;
		public readonly TEXT_NODE: number = 3;
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createSuperNode",
			});
			// proxy supports indexed property access
			const proxy = new Proxy(this, {
				get(target, prop) {
					if (prop in target) {
						// @ts-expect-error
						const value: any = target[prop];
						if (typeof value === "function") return value.bind(target);
						return value;
					}

					// delegate to indexer property
					if (
						(typeof prop === "string" || typeof prop === "number") &&
						!isNaN(prop as unknown as number)
					) {
						const param = parseInt(prop as string, 10);
						return target.item(param);
					}
				},
			});

			return proxy;
		}

		// properties

		public get baseURI(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "baseURI", false);
		}

		public get childNodes(): ISuperNodeList {
			throw new Error("SuperNode.childNodes getter not implemented");
		}

		public get firstChild(): ISuperNode {
			throw new Error("SuperNode.firstChild getter not implemented");
		}

		public get isConnected(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "isConnected", false);
		}

		public get lastChild(): ISuperNode {
			throw new Error("SuperNode.lastChild getter not implemented");
		}

		public get nextSibling(): ISuperNode {
			throw new Error("SuperNode.nextSibling getter not implemented");
		}

		public get nodeName(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "nodeName", false);
		}

		public get nodeType(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "nodeType", false);
		}

		public get nodeValue(): Promise<string | null> {
			return awaitedHandler.getProperty<string | null>(this, "nodeValue", true);
		}

		public get ownerDocument(): ISuperDocument {
			throw new Error("SuperNode.ownerDocument getter not implemented");
		}

		public get parentElement(): ISuperElement {
			throw new Error("SuperNode.parentElement getter not implemented");
		}

		public get parentNode(): ISuperNode {
			throw new Error("SuperNode.parentNode getter not implemented");
		}

		public get previousSibling(): ISuperNode {
			throw new Error("SuperNode.previousSibling getter not implemented");
		}

		public get textContent(): Promise<string | null> {
			return awaitedHandler.getProperty<string | null>(
				this,
				"textContent",
				true,
			);
		}

		// methods

		public compareDocumentPosition(other: INodeIsolate): Promise<number> {
			return awaitedHandler.runMethod<number>(this, "compareDocumentPosition", [
				other,
			]);
		}

		public contains(other: INodeIsolate | null): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "contains", [other]);
		}

		public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
			throw new Error("SuperNode.getRootNode not implemented");
		}

		public hasChildNodes(): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasChildNodes", []);
		}

		public isDefaultNamespace(namespace: string | null): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "isDefaultNamespace", [
				namespace,
			]);
		}

		public isEqualNode(otherNode: INodeIsolate | null): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "isEqualNode", [
				otherNode,
			]);
		}

		public isSameNode(otherNode: INodeIsolate | null): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "isSameNode", [otherNode]);
		}

		public lookupNamespaceURI(prefix: string | null): Promise<string | null> {
			return awaitedHandler.runMethod<string | null>(
				this,
				"lookupNamespaceURI",
				[prefix],
			);
		}

		public lookupPrefix(namespace: string | null): Promise<string | null> {
			return awaitedHandler.runMethod<string | null>(this, "lookupPrefix", [
				namespace,
			]);
		}

		public normalize(): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "normalize", []);
		}

		public then<TResult1 = ISuperNode, TResult2 = never>(
			onfulfilled?:
				| ((value: ISuperNode) => PromiseLike<TResult1> | TResult1)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => PromiseLike<TResult2> | TResult2)
				| undefined
				| null,
		): Promise<TResult1 | TResult2> {
			return nodeFactory
				.createInstanceWithNodePointer(this)
				.then(onfulfilled, onrejected);
		}

		[index: number]: ISuperElement;

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				SuperNodePropertyKeys,
				SuperNodeConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeProperties
	extends IAttrIsolateProperties,
		ICharacterDataIsolateProperties,
		IDocumentFragmentIsolateProperties,
		IDocumentIsolateProperties,
		IDocumentOrShadowRootProperties,
		IDocumentTypeIsolateProperties,
		IElementCSSInlineStyleProperties,
		IElementContentEditableProperties,
		IElementIsolateProperties,
		IHTMLAnchorElementIsolateProperties,
		IHTMLAreaElementIsolateProperties,
		IHTMLAudioElementIsolateProperties,
		IHTMLBRElementIsolateProperties,
		IHTMLBaseElementIsolateProperties,
		IHTMLBodyElementIsolateProperties,
		IHTMLButtonElementIsolateProperties,
		IHTMLCanvasElementIsolateProperties,
		IHTMLDListElementIsolateProperties,
		IHTMLDataElementIsolateProperties,
		IHTMLDataListElementIsolateProperties,
		IHTMLDetailsElementIsolateProperties,
		IHTMLDialogElementIsolateProperties,
		IHTMLDirectoryElementIsolateProperties,
		IHTMLDivElementIsolateProperties,
		IHTMLDocumentIsolateProperties,
		IHTMLElementIsolateProperties,
		IHTMLEmbedElementIsolateProperties,
		IHTMLFieldSetElementIsolateProperties,
		IHTMLFontElementIsolateProperties,
		IHTMLFormElementIsolateProperties,
		IHTMLFrameElementIsolateProperties,
		IHTMLFrameSetElementIsolateProperties,
		IHTMLHRElementIsolateProperties,
		IHTMLHeadElementIsolateProperties,
		IHTMLHeadingElementIsolateProperties,
		IHTMLHtmlElementIsolateProperties,
		IHTMLHyperlinkElementUtilsProperties,
		IHTMLIFrameElementIsolateProperties,
		IHTMLImageElementIsolateProperties,
		IHTMLInputElementIsolateProperties,
		IHTMLLIElementIsolateProperties,
		IHTMLLabelElementIsolateProperties,
		IHTMLLegendElementIsolateProperties,
		IHTMLLinkElementIsolateProperties,
		IHTMLMapElementIsolateProperties,
		IHTMLMediaElementIsolateProperties,
		IHTMLMetaElementIsolateProperties,
		IHTMLMeterElementIsolateProperties,
		IHTMLModElementIsolateProperties,
		IHTMLOListElementIsolateProperties,
		IHTMLObjectElementIsolateProperties,
		IHTMLOptGroupElementIsolateProperties,
		IHTMLOptionElementIsolateProperties,
		IHTMLOrSVGElementProperties,
		IHTMLParagraphElementIsolateProperties,
		IHTMLParamElementIsolateProperties,
		IHTMLPreElementIsolateProperties,
		IHTMLProgressElementIsolateProperties,
		IHTMLQuoteElementIsolateProperties,
		IHTMLScriptElementIsolateProperties,
		IHTMLSelectElementIsolateProperties,
		IHTMLSlotElementIsolateProperties,
		IHTMLSourceElementIsolateProperties,
		IHTMLSpanElementIsolateProperties,
		IHTMLStyleElementIsolateProperties,
		IHTMLTableCaptionElementIsolateProperties,
		IHTMLTableCellElementIsolateProperties,
		IHTMLTableColElementIsolateProperties,
		IHTMLTableElementIsolateProperties,
		IHTMLTableRowElementIsolateProperties,
		IHTMLTableSectionElementIsolateProperties,
		IHTMLTemplateElementIsolateProperties,
		IHTMLTextAreaElementIsolateProperties,
		IHTMLTimeElementIsolateProperties,
		IHTMLTitleElementIsolateProperties,
		IHTMLTrackElementIsolateProperties,
		IHTMLUListElementIsolateProperties,
		IHTMLVideoElementIsolateProperties,
		ILinkStyleProperties,
		INodeIsolateProperties,
		INonDocumentTypeChildNodeProperties,
		INonElementParentNodeProperties,
		IParentNodeProperties,
		IShadowRootIsolateProperties,
		ISlotableProperties,
		ITextIsolateProperties,
		IXPathEvaluatorBaseProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly baseURI?: Promise<string>;
	readonly childNodes?: ISuperNodeList;
	readonly firstChild?: ISuperNode;
	readonly isConnected?: Promise<boolean>;
	readonly lastChild?: ISuperNode;
	readonly nextSibling?: ISuperNode;
	readonly nodeName?: Promise<string>;
	readonly nodeType?: Promise<number>;
	readonly nodeValue?: Promise<string | null>;
	readonly ownerDocument?: ISuperDocument;
	readonly parentElement?: ISuperElement;
	readonly parentNode?: ISuperNode;
	readonly previousSibling?: ISuperNode;
	readonly textContent?: Promise<string | null>;
}

export const SuperNodePropertyKeys = [
	...AttrIsolatePropertyKeys,
	...CharacterDataIsolatePropertyKeys,
	...DocumentFragmentIsolatePropertyKeys,
	...DocumentIsolatePropertyKeys,
	...DocumentOrShadowRootPropertyKeys,
	...DocumentTypeIsolatePropertyKeys,
	...ElementCSSInlineStylePropertyKeys,
	...ElementContentEditablePropertyKeys,
	...ElementIsolatePropertyKeys,
	...HTMLAnchorElementIsolatePropertyKeys,
	...HTMLAreaElementIsolatePropertyKeys,
	...HTMLAudioElementIsolatePropertyKeys,
	...HTMLBRElementIsolatePropertyKeys,
	...HTMLBaseElementIsolatePropertyKeys,
	...HTMLBodyElementIsolatePropertyKeys,
	...HTMLButtonElementIsolatePropertyKeys,
	...HTMLCanvasElementIsolatePropertyKeys,
	...HTMLDListElementIsolatePropertyKeys,
	...HTMLDataElementIsolatePropertyKeys,
	...HTMLDataListElementIsolatePropertyKeys,
	...HTMLDetailsElementIsolatePropertyKeys,
	...HTMLDialogElementIsolatePropertyKeys,
	...HTMLDirectoryElementIsolatePropertyKeys,
	...HTMLDivElementIsolatePropertyKeys,
	...HTMLDocumentIsolatePropertyKeys,
	...HTMLElementIsolatePropertyKeys,
	...HTMLEmbedElementIsolatePropertyKeys,
	...HTMLFieldSetElementIsolatePropertyKeys,
	...HTMLFontElementIsolatePropertyKeys,
	...HTMLFormElementIsolatePropertyKeys,
	...HTMLFrameElementIsolatePropertyKeys,
	...HTMLFrameSetElementIsolatePropertyKeys,
	...HTMLHRElementIsolatePropertyKeys,
	...HTMLHeadElementIsolatePropertyKeys,
	...HTMLHeadingElementIsolatePropertyKeys,
	...HTMLHtmlElementIsolatePropertyKeys,
	...HTMLHyperlinkElementUtilsPropertyKeys,
	...HTMLIFrameElementIsolatePropertyKeys,
	...HTMLImageElementIsolatePropertyKeys,
	...HTMLInputElementIsolatePropertyKeys,
	...HTMLLIElementIsolatePropertyKeys,
	...HTMLLabelElementIsolatePropertyKeys,
	...HTMLLegendElementIsolatePropertyKeys,
	...HTMLLinkElementIsolatePropertyKeys,
	...HTMLMapElementIsolatePropertyKeys,
	...HTMLMediaElementIsolatePropertyKeys,
	...HTMLMetaElementIsolatePropertyKeys,
	...HTMLMeterElementIsolatePropertyKeys,
	...HTMLModElementIsolatePropertyKeys,
	...HTMLOListElementIsolatePropertyKeys,
	...HTMLObjectElementIsolatePropertyKeys,
	...HTMLOptGroupElementIsolatePropertyKeys,
	...HTMLOptionElementIsolatePropertyKeys,
	...HTMLOrSVGElementPropertyKeys,
	...HTMLParagraphElementIsolatePropertyKeys,
	...HTMLParamElementIsolatePropertyKeys,
	...HTMLPreElementIsolatePropertyKeys,
	...HTMLProgressElementIsolatePropertyKeys,
	...HTMLQuoteElementIsolatePropertyKeys,
	...HTMLScriptElementIsolatePropertyKeys,
	...HTMLSelectElementIsolatePropertyKeys,
	...HTMLSlotElementIsolatePropertyKeys,
	...HTMLSourceElementIsolatePropertyKeys,
	...HTMLSpanElementIsolatePropertyKeys,
	...HTMLStyleElementIsolatePropertyKeys,
	...HTMLTableCaptionElementIsolatePropertyKeys,
	...HTMLTableCellElementIsolatePropertyKeys,
	...HTMLTableColElementIsolatePropertyKeys,
	...HTMLTableElementIsolatePropertyKeys,
	...HTMLTableRowElementIsolatePropertyKeys,
	...HTMLTableSectionElementIsolatePropertyKeys,
	...HTMLTemplateElementIsolatePropertyKeys,
	...HTMLTextAreaElementIsolatePropertyKeys,
	...HTMLTimeElementIsolatePropertyKeys,
	...HTMLTitleElementIsolatePropertyKeys,
	...HTMLTrackElementIsolatePropertyKeys,
	...HTMLUListElementIsolatePropertyKeys,
	...HTMLVideoElementIsolatePropertyKeys,
	...LinkStylePropertyKeys,
	...NodeIsolatePropertyKeys,
	...NonDocumentTypeChildNodePropertyKeys,
	...NonElementParentNodePropertyKeys,
	...ParentNodePropertyKeys,
	...ShadowRootIsolatePropertyKeys,
	...SlotablePropertyKeys,
	...TextIsolatePropertyKeys,
	...XPathEvaluatorBasePropertyKeys,
	"baseURI",
	"childNodes",
	"firstChild",
	"isConnected",
	"lastChild",
	"nextSibling",
	"nodeName",
	"nodeType",
	"nodeValue",
	"ownerDocument",
	"parentElement",
	"parentNode",
	"previousSibling",
	"textContent",
];

export const SuperNodeConstantKeys = [
	...AttrIsolateConstantKeys,
	...CharacterDataIsolateConstantKeys,
	...DocumentFragmentIsolateConstantKeys,
	...DocumentIsolateConstantKeys,
	...DocumentOrShadowRootConstantKeys,
	...DocumentTypeIsolateConstantKeys,
	...ElementCSSInlineStyleConstantKeys,
	...ElementContentEditableConstantKeys,
	...ElementIsolateConstantKeys,
	...HTMLAnchorElementIsolateConstantKeys,
	...HTMLAreaElementIsolateConstantKeys,
	...HTMLAudioElementIsolateConstantKeys,
	...HTMLBRElementIsolateConstantKeys,
	...HTMLBaseElementIsolateConstantKeys,
	...HTMLBodyElementIsolateConstantKeys,
	...HTMLButtonElementIsolateConstantKeys,
	...HTMLCanvasElementIsolateConstantKeys,
	...HTMLDListElementIsolateConstantKeys,
	...HTMLDataElementIsolateConstantKeys,
	...HTMLDataListElementIsolateConstantKeys,
	...HTMLDetailsElementIsolateConstantKeys,
	...HTMLDialogElementIsolateConstantKeys,
	...HTMLDirectoryElementIsolateConstantKeys,
	...HTMLDivElementIsolateConstantKeys,
	...HTMLDocumentIsolateConstantKeys,
	...HTMLElementIsolateConstantKeys,
	...HTMLEmbedElementIsolateConstantKeys,
	...HTMLFieldSetElementIsolateConstantKeys,
	...HTMLFontElementIsolateConstantKeys,
	...HTMLFormElementIsolateConstantKeys,
	...HTMLFrameElementIsolateConstantKeys,
	...HTMLFrameSetElementIsolateConstantKeys,
	...HTMLHRElementIsolateConstantKeys,
	...HTMLHeadElementIsolateConstantKeys,
	...HTMLHeadingElementIsolateConstantKeys,
	...HTMLHtmlElementIsolateConstantKeys,
	...HTMLHyperlinkElementUtilsConstantKeys,
	...HTMLIFrameElementIsolateConstantKeys,
	...HTMLImageElementIsolateConstantKeys,
	...HTMLInputElementIsolateConstantKeys,
	...HTMLLIElementIsolateConstantKeys,
	...HTMLLabelElementIsolateConstantKeys,
	...HTMLLegendElementIsolateConstantKeys,
	...HTMLLinkElementIsolateConstantKeys,
	...HTMLMapElementIsolateConstantKeys,
	...HTMLMediaElementIsolateConstantKeys,
	...HTMLMetaElementIsolateConstantKeys,
	...HTMLMeterElementIsolateConstantKeys,
	...HTMLModElementIsolateConstantKeys,
	...HTMLOListElementIsolateConstantKeys,
	...HTMLObjectElementIsolateConstantKeys,
	...HTMLOptGroupElementIsolateConstantKeys,
	...HTMLOptionElementIsolateConstantKeys,
	...HTMLOrSVGElementConstantKeys,
	...HTMLParagraphElementIsolateConstantKeys,
	...HTMLParamElementIsolateConstantKeys,
	...HTMLPreElementIsolateConstantKeys,
	...HTMLProgressElementIsolateConstantKeys,
	...HTMLQuoteElementIsolateConstantKeys,
	...HTMLScriptElementIsolateConstantKeys,
	...HTMLSelectElementIsolateConstantKeys,
	...HTMLSlotElementIsolateConstantKeys,
	...HTMLSourceElementIsolateConstantKeys,
	...HTMLSpanElementIsolateConstantKeys,
	...HTMLStyleElementIsolateConstantKeys,
	...HTMLTableCaptionElementIsolateConstantKeys,
	...HTMLTableCellElementIsolateConstantKeys,
	...HTMLTableColElementIsolateConstantKeys,
	...HTMLTableElementIsolateConstantKeys,
	...HTMLTableRowElementIsolateConstantKeys,
	...HTMLTableSectionElementIsolateConstantKeys,
	...HTMLTemplateElementIsolateConstantKeys,
	...HTMLTextAreaElementIsolateConstantKeys,
	...HTMLTimeElementIsolateConstantKeys,
	...HTMLTitleElementIsolateConstantKeys,
	...HTMLTrackElementIsolateConstantKeys,
	...HTMLUListElementIsolateConstantKeys,
	...HTMLVideoElementIsolateConstantKeys,
	...LinkStyleConstantKeys,
	...NodeIsolateConstantKeys,
	...NonDocumentTypeChildNodeConstantKeys,
	...NonElementParentNodeConstantKeys,
	...ParentNodeConstantKeys,
	...ShadowRootIsolateConstantKeys,
	...SlotableConstantKeys,
	...TextIsolateConstantKeys,
	...XPathEvaluatorBaseConstantKeys,
	"ATTRIBUTE_NODE",
	"CDATA_SECTION_NODE",
	"COMMENT_NODE",
	"DOCUMENT_FRAGMENT_NODE",
	"DOCUMENT_NODE",
	"DOCUMENT_POSITION_CONTAINED_BY",
	"DOCUMENT_POSITION_CONTAINS",
	"DOCUMENT_POSITION_DISCONNECTED",
	"DOCUMENT_POSITION_FOLLOWING",
	"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
	"DOCUMENT_POSITION_PRECEDING",
	"DOCUMENT_TYPE_NODE",
	"ELEMENT_NODE",
	"ENTITY_NODE",
	"ENTITY_REFERENCE_NODE",
	"NOTATION_NODE",
	"PROCESSING_INSTRUCTION_NODE",
	"TEXT_NODE",
];

import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
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
} from "../interfaces/isolate";
import type {
	IAttr,
	IDOMRect,
	IDOMRectList,
	IDOMTokenList,
	IElementContentEditable,
	IElementCSSInlineStyle,
	IFullscreenOptions,
	IHTMLHyperlinkElementUtils,
	IHTMLOrSVGElement,
	ILinkStyle,
	INamedNodeMap,
	INonDocumentTypeChildNode,
	IParentNode,
	IScrollIntoViewOptions,
	IShadowRoot,
	ISlotable,
} from "../interfaces/official";
import type { ISuperElement, ISuperHTMLCollection } from "../interfaces/super";
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
import NodeFactory from "../NodeFactory";
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
	type IParentNodeProperties,
	ParentNodeConstantKeys,
	ParentNodePropertyKeys,
} from "../official-mixins/ParentNode";
import {
	type ISlotableProperties,
	SlotableConstantKeys,
	SlotablePropertyKeys,
} from "../official-mixins/Slotable";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISuperElement,
	ISuperElementProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperElement>(
	"SuperElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<ISuperElement>(
	getState,
	setState,
	awaitedHandler,
);

export function SuperElementGenerator(
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
	ParentNode: Constructable<IParentNode>,
	Slotable: Constructable<ISlotable>,
) {
	const Parent = ClassMixer(ElementCSSInlineStyle, [
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
		ParentNode,
		Slotable,
	]) as unknown as Constructable<
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
			IParentNode &
			ISlotable
	>;

	return class SuperElement
		extends Parent
		implements ISuperElement, PromiseLike<ISuperElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createSuperElement",
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

		public get attributes(): INamedNodeMap {
			throw new Error("SuperElement.attributes getter not implemented");
		}

		public get classList(): IDOMTokenList {
			throw new Error("SuperElement.classList getter not implemented");
		}

		public get className(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "className", false);
		}

		public get clientHeight(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "clientHeight", false);
		}

		public get clientLeft(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "clientLeft", false);
		}

		public get clientTop(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "clientTop", false);
		}

		public get clientWidth(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "clientWidth", false);
		}

		public get id(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "id", false);
		}

		public get innerHTML(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "innerHTML", false);
		}

		public get localName(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "localName", false);
		}

		public get namespaceURI(): Promise<string | null> {
			return awaitedHandler.getProperty<string | null>(
				this,
				"namespaceURI",
				true,
			);
		}

		public get outerHTML(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "outerHTML", false);
		}

		public get part(): IDOMTokenList {
			throw new Error("SuperElement.part getter not implemented");
		}

		public get prefix(): Promise<string | null> {
			return awaitedHandler.getProperty<string | null>(this, "prefix", true);
		}

		public get scrollHeight(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "scrollHeight", false);
		}

		public get scrollLeft(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "scrollLeft", false);
		}

		public get scrollTop(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "scrollTop", false);
		}

		public get scrollWidth(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "scrollWidth", false);
		}

		public get shadowRoot(): IShadowRoot {
			throw new Error("SuperElement.shadowRoot getter not implemented");
		}

		public get slot(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "slot", false);
		}

		public get tagName(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "tagName", false);
		}

		// methods

		public closest(selectors: string): ISuperElement {
			throw new Error("SuperElement.closest not implemented");
		}

		public getAttribute(qualifiedName: string): Promise<string | null> {
			return awaitedHandler.runMethod<string | null>(this, "getAttribute", [
				qualifiedName,
			]);
		}

		public getAttributeNS(
			namespace: string | null,
			localName: string,
		): Promise<string | null> {
			return awaitedHandler.runMethod<string | null>(this, "getAttributeNS", [
				namespace,
				localName,
			]);
		}

		public getAttributeNames(): Promise<Iterable<string>> {
			return awaitedHandler.runMethod<Iterable<string>>(
				this,
				"getAttributeNames",
				[],
			);
		}

		public getAttributeNode(qualifiedName: string): Promise<IAttr | null> {
			return awaitedHandler.runMethod<IAttr | null>(this, "getAttributeNode", [
				qualifiedName,
			]);
		}

		public getAttributeNodeNS(
			namespace: string | null,
			localName: string,
		): Promise<IAttr | null> {
			return awaitedHandler.runMethod<IAttr | null>(
				this,
				"getAttributeNodeNS",
				[namespace, localName],
			);
		}

		public getBoundingClientRect(): Promise<IDOMRect> {
			return awaitedHandler.runMethod<IDOMRect>(
				this,
				"getBoundingClientRect",
				[],
			);
		}

		public getClientRects(): Promise<IDOMRectList> {
			return awaitedHandler.runMethod<IDOMRectList>(this, "getClientRects", []);
		}

		public getElementsByClassName(classNames: string): ISuperHTMLCollection {
			throw new Error("SuperElement.getElementsByClassName not implemented");
		}

		public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
			throw new Error("SuperElement.getElementsByTagName not implemented");
		}

		public getElementsByTagNameNS(
			namespace: string | null,
			localName: string,
		): ISuperHTMLCollection {
			throw new Error("SuperElement.getElementsByTagNameNS not implemented");
		}

		public hasAttribute(qualifiedName: string): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasAttribute", [
				qualifiedName,
			]);
		}

		public hasAttributeNS(
			namespace: string | null,
			localName: string,
		): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasAttributeNS", [
				namespace,
				localName,
			]);
		}

		public hasAttributes(): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasAttributes", []);
		}

		public hasPointerCapture(pointerId: number): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasPointerCapture", [
				pointerId,
			]);
		}

		public matches(selectors: string): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "matches", [selectors]);
		}

		public requestFullscreen(options?: IFullscreenOptions): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "requestFullscreen", [
				options,
			]);
		}

		public requestPointerLock(): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "requestPointerLock", []);
		}

		public scrollIntoView(
			arg?: boolean | IScrollIntoViewOptions,
		): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "scrollIntoView", [arg]);
		}

		public then<TResult1 = ISuperElement, TResult2 = never>(
			onfulfilled?:
				| ((value: ISuperElement) => PromiseLike<TResult1> | TResult1)
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
				SuperElementPropertyKeys,
				SuperElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperElementProperties
	extends IElementCSSInlineStyleProperties,
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
		IParentNodeProperties,
		ISlotableProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly attributes?: INamedNodeMap;
	readonly classList?: IDOMTokenList;
	readonly className?: Promise<string>;
	readonly clientHeight?: Promise<number>;
	readonly clientLeft?: Promise<number>;
	readonly clientTop?: Promise<number>;
	readonly clientWidth?: Promise<number>;
	readonly id?: Promise<string>;
	readonly innerHTML?: Promise<string>;
	readonly localName?: Promise<string>;
	readonly namespaceURI?: Promise<string | null>;
	readonly outerHTML?: Promise<string>;
	readonly part?: IDOMTokenList;
	readonly prefix?: Promise<string | null>;
	readonly scrollHeight?: Promise<number>;
	readonly scrollLeft?: Promise<number>;
	readonly scrollTop?: Promise<number>;
	readonly scrollWidth?: Promise<number>;
	readonly shadowRoot?: IShadowRoot;
	readonly slot?: Promise<string>;
	readonly tagName?: Promise<string>;
}

export const SuperElementPropertyKeys = [
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
	...ParentNodePropertyKeys,
	...SlotablePropertyKeys,
	"attributes",
	"classList",
	"className",
	"clientHeight",
	"clientLeft",
	"clientTop",
	"clientWidth",
	"id",
	"innerHTML",
	"localName",
	"namespaceURI",
	"outerHTML",
	"part",
	"prefix",
	"scrollHeight",
	"scrollLeft",
	"scrollTop",
	"scrollWidth",
	"shadowRoot",
	"slot",
	"tagName",
];

export const SuperElementConstantKeys = [
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
	...ParentNodeConstantKeys,
	...SlotableConstantKeys,
];

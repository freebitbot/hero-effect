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
	IElementContentEditable,
	IElementCSSInlineStyle,
	IHTMLHyperlinkElementUtils,
	IHTMLOrSVGElement,
	ILinkStyle,
	INonDocumentTypeChildNode,
	IParentNode,
	ISlotable,
} from "../interfaces/official";
import type { ISuperElement, ISuperHTMLElement } from "../interfaces/super";
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
	ISuperHTMLElement,
	ISuperHTMLElementProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLElement>(
	"SuperHTMLElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<ISuperHTMLElement>(
	getState,
	setState,
	awaitedHandler,
);

export function SuperHTMLElementGenerator(
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

	return class SuperHTMLElement
		extends Parent
		implements ISuperHTMLElement, PromiseLike<ISuperHTMLElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createSuperHTMLElement",
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

		public get accessKey(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "accessKey", false);
		}

		public get autoCapitalize(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "autoCapitalize", false);
		}

		public get dir(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "dir", false);
		}

		public get draggable(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "draggable", false);
		}

		public get hidden(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "hidden", false);
		}

		public get inert(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "inert", false);
		}

		public get innerText(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "innerText", false);
		}

		public get lang(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "lang", false);
		}

		public get offsetHeight(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "offsetHeight", false);
		}

		public get offsetLeft(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "offsetLeft", false);
		}

		public get offsetParent(): ISuperElement {
			throw new Error("SuperHTMLElement.offsetParent getter not implemented");
		}

		public get offsetTop(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "offsetTop", false);
		}

		public get offsetWidth(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "offsetWidth", false);
		}

		public get spellcheck(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "spellcheck", false);
		}

		public get title(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "title", false);
		}

		public get translate(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "translate", false);
		}

		// methods

		public click(): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "click", []);
		}

		public then<TResult1 = ISuperHTMLElement, TResult2 = never>(
			onfulfilled?:
				| ((value: ISuperHTMLElement) => PromiseLike<TResult1> | TResult1)
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
				SuperHTMLElementPropertyKeys,
				SuperHTMLElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLElementProperties
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

	readonly accessKey?: Promise<string>;
	readonly autoCapitalize?: Promise<string>;
	readonly dir?: Promise<string>;
	readonly draggable?: Promise<boolean>;
	readonly hidden?: Promise<boolean>;
	readonly inert?: Promise<boolean>;
	readonly innerText?: Promise<string>;
	readonly lang?: Promise<string>;
	readonly offsetHeight?: Promise<number>;
	readonly offsetLeft?: Promise<number>;
	readonly offsetParent?: ISuperElement;
	readonly offsetTop?: Promise<number>;
	readonly offsetWidth?: Promise<number>;
	readonly spellcheck?: Promise<boolean>;
	readonly title?: Promise<string>;
	readonly translate?: Promise<boolean>;
}

export const SuperHTMLElementPropertyKeys = [
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
	"accessKey",
	"autoCapitalize",
	"dir",
	"draggable",
	"hidden",
	"inert",
	"innerText",
	"lang",
	"offsetHeight",
	"offsetLeft",
	"offsetParent",
	"offsetTop",
	"offsetWidth",
	"spellcheck",
	"title",
	"translate",
];

export const SuperHTMLElementConstantKeys = [
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

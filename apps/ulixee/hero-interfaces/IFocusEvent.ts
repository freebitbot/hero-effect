// tslint:disable-next-line
import type { UnixTimestamp } from "./GenericTypes";

type NodeId = number;
type RelatedNodeId = NodeId;

export enum FocusEventType {
	IN = 0,
	OUT = 1,
}

export type IFocusEvent = [
	FocusEventType,
	NodeId,
	RelatedNodeId,
	UnixTimestamp,
];

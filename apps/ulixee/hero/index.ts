// setup must go first
import "./lib/SetupAwaitedHandler";
import "./lib/DomExtender";
import type {
	IElement,
	IHTMLCollection,
	IHTMLElement,
	INode,
	INodeList,
} from "@ulixee/awaited-dom/base/interfaces/official";
import type {
	ISuperDocument,
	ISuperElement,
	ISuperHTMLCollection,
	ISuperHTMLElement,
	ISuperNode,
	ISuperNodeList,
	ISuperStyleSheet,
	ISuperText,
} from "@ulixee/awaited-dom/base/interfaces/super";
import { Node, XPathResult } from "@ulixee/hero-interfaces/AwaitedDom";
import { BlockedResourceType } from "@ulixee/hero-interfaces/ITabOptions";
import type IUserProfile from "@ulixee/hero-interfaces/IUserProfile";
import {
	LoadStatus,
	LocationStatus,
	LocationTrigger,
} from "@ulixee/unblocked-specification/agent/browser/Location";
import {
	InteractionCommand,
	MouseButton,
} from "@ulixee/unblocked-specification/agent/interact/IInteractions";
import { KeyboardKey } from "@ulixee/unblocked-specification/agent/interact/IKeyboardLayoutUS";
import IResourceType, {
	ResourceType,
} from "@ulixee/unblocked-specification/agent/net/IResourceType";
import ConnectionToHeroCore from "./connections/ConnectionToHeroCore";
import type IConnectionToCoreOptions from "./interfaces/IConnectionToCoreOptions";
import type IHeroCreateOptions from "./interfaces/IHeroCreateOptions";
import type IHeroReplayCreateOptions from "./interfaces/IHeroReplayCreateOptions";
import { Command } from "./interfaces/IInteractions";
import DetachedElement from "./lib/DetachedElement";
import {
	FrameEnvironment,
	Hero,
	HeroReplay,
	Resource,
	Tab,
	WebsocketResource,
} from "./lib/extendables";
import "./env";

export default Hero;

export {
	BlockedResourceType,
	Command,
	ConnectionToHeroCore,
	DetachedElement,
	FrameEnvironment,
	HeroReplay,
	type IConnectionToCoreOptions,
	type IElement,
	type IHeroCreateOptions,
	type IHeroReplayCreateOptions,
	type IHTMLCollection,
	type IHTMLElement,
	type INode,
	type INodeList,
	InteractionCommand,
	IResourceType,
	type ISuperDocument,
	type ISuperElement,
	type ISuperHTMLCollection,
	type ISuperHTMLElement,
	type ISuperNode,
	type ISuperNodeList,
	type ISuperStyleSheet,
	type ISuperText,
	type IUserProfile,
	KeyboardKey,
	LoadStatus,
	LocationStatus,
	LocationTrigger,
	MouseButton,
	Node,
	Resource,
	ResourceType,
	Tab,
	WebsocketResource,
	XPathResult,
};

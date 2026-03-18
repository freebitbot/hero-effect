import type { INodeVisibility } from "@ulixee/js-path";
import type IWindowOffset from "@ulixee/unblocked-specification/agent/browser/IWindowOffset";
import type IMouseResult from "@ulixee/unblocked-specification/agent/interact/IMouseResult";

class MouseEvents {
	private static pendingEvent?: Promise<IMouseResult>;
	private static pendingEventResolve?: (result: IMouseResult) => void;
	private static targetNodeId: number;
	private static containerOffset: { x: number; y: number } = { x: 0, y: 0 };

	public static init() {
		MouseEvents.onMousedown = MouseEvents.onMousedown.bind(MouseEvents);
	}

	public static getWindowOffset(): IWindowOffset {
		const scrollElement = document.scrollingElement ?? document.documentElement;
		return {
			innerHeight, // eslint-disable-line no-restricted-globals
			innerWidth, // eslint-disable-line no-restricted-globals
			scrollY: scrollElement?.scrollTop ?? 0,
			scrollX: scrollElement?.scrollLeft ?? 0,
			scrollHeight: scrollElement?.scrollHeight ?? 0,
			scrollWidth: scrollElement?.scrollWidth ?? 0,
		};
	}

	public static async waitForScrollStop(timeoutMillis: number) {
		const endTime = new Date().getTime() + (timeoutMillis ?? 50);
		const scrollElement = document.scrollingElement ?? document.documentElement;
		let left = 0;
		let top = 0;
		let consecutiveMatches = 0;
		do {
			await new Promise(requestAnimationFrame);
			const prevLeft = left;
			const prevTop = top;
			left = scrollElement.scrollLeft;
			top = scrollElement.scrollTop;
			if (left === prevLeft && top === prevTop) {
				consecutiveMatches += 1;
			} else {
				consecutiveMatches = 0;
			}
			if (consecutiveMatches >= 2) return [left, top];
		} while (new Date().getTime() < endTime);

		return [left, top];
	}

	public static listenFor(
		nodeId: number,
		containerOffset: { x: number; y: number },
	): INodeVisibility {
		if (MouseEvents.targetNodeId)
			MouseEvents.clearEvent(MouseEvents.targetNodeId);

		const node = NodeTracker.getWatchedNodeWithId(nodeId);
		if (!node) throw new Error("Node not found");

		const visibility = MouseEvents.getNodeVisibility(node);

		MouseEvents.containerOffset = containerOffset;
		MouseEvents.targetNodeId = nodeId;
		MouseEvents.pendingEvent = new Promise<IMouseResult>((resolve) => {
			MouseEvents.pendingEventResolve = resolve;
		});

		window.addEventListener("mousedown", MouseEvents.onMousedown, {
			once: true,
			capture: true,
			passive: false,
		});

		return visibility;
	}

	public static didTrigger(nodeId: number) {
		try {
			if (MouseEvents.targetNodeId !== nodeId) {
				throw new Error(`"mouseup" listener not found`);
			}

			return MouseEvents.pendingEvent;
		} finally {
			MouseEvents.clearEvent(nodeId);
		}
	}

	private static onMousedown(event: MouseEvent) {
		const desiredClickTarget = NodeTracker.getWatchedNodeWithId(
			MouseEvents.targetNodeId,
		) as Element;
		const targetNodeId = event.target
			? NodeTracker.watchNode(event.target as Node)
			: undefined;
		const relatedTargetNodeId = event.relatedTarget
			? NodeTracker.watchNode(event.relatedTarget as Node)
			: undefined;

		let hitElement = event.target as Node;
		let didClickLocation =
			desiredClickTarget.contains(hitElement) ||
			desiredClickTarget === hitElement;
		if (!didClickLocation) {
			// try working around Chrome issues with shadow elements
			hitElement = ObjectAtPath.elementFromPoint(event.clientX, event.clientY);
			if (
				desiredClickTarget.contains(hitElement) ||
				desiredClickTarget === hitElement
			) {
				didClickLocation = true;
			}
		}

		const result: IMouseResult = {
			pageX: MouseEvents.containerOffset.x + event.pageX - window.scrollX,
			pageY: MouseEvents.containerOffset.y + event.pageY - window.scrollY,
			targetNodeId,
			relatedTargetNodeId,
			didClickLocation,
		};

		if (!result.didClickLocation) {
			event.cancelBubble = true;
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			// @ts-expect-error
			result.targetNodePreview = generateNodePreview(hitElement);
			// @ts-expect-error
			result.expectedNodePreview = generateNodePreview(desiredClickTarget);
			result.expectedNodeVisibility =
				MouseEvents.getNodeVisibility(desiredClickTarget);
		}

		MouseEvents.pendingEventResolve(result);
		return result.didClickLocation;
	}

	private static getNodeVisibility(node: Node): INodeVisibility {
		const objectAtPath = new ObjectAtPath();
		objectAtPath.objectAtPath = node;
		return objectAtPath.getComputedVisibility();
	}

	private static clearEvent(nodeId: number) {
		if (MouseEvents.targetNodeId === nodeId) {
			window.removeEventListener("mousedown", MouseEvents.onMousedown);
			MouseEvents.pendingEvent = null;
			MouseEvents.pendingEventResolve = null;
			MouseEvents.targetNodeId = null;
		}
	}
}

MouseEvents.init();

// have to add an import to use global define
import {} from "@ulixee/unblocked-specification/agent/browser/IWindowOffset";

interface IStaticNodeTracker {
	has(node: Node): boolean;
	getNodeId(node: Node): number | undefined;
	getWatchedNodeWithId(id: number, throwIfFound?: boolean): Node;
	watchNode(node: Node): number | undefined;
	track(node: Node): number;
	restore(id: number, node: Node): void;
}

declare global {
	interface Window {
		NodeTracker: IStaticNodeTracker;
	}
	let NodeTracker: IStaticNodeTracker;
}

function NodeTrackerStatics(staticClass: IStaticNodeTracker) {}

@NodeTrackerStatics
class NodeTracker {
	public static nodeIdSymbol = Symbol.for("heroNodeId");
	private static nextId = 1;
	private static watchedNodesById = new Map<number, Node>();

	public static has(node: Node): boolean {
		return !!node[NodeTracker.nodeIdSymbol];
	}

	public static getNodeId(node: Node): number {
		if (!node) return undefined;
		return node[NodeTracker.nodeIdSymbol] ?? undefined;
	}

	public static watchNode(node: Node): number {
		let id = NodeTracker.getNodeId(node);
		if (!id) {
			// extract so we detect any nodes that haven't been extracted yet. Ie, called from jsPath
			if ("extractDomChanges" in window) {
				window.extractDomChanges();
			}
			if (!NodeTracker.has(node) && "trackElement" in window) {
				window.trackElement(node as any);
			}
			id = NodeTracker.track(node);
		}

		NodeTracker.watchedNodesById.set(id, node);
		return id;
	}

	public static track(node: Node): number {
		if (!node) return;
		if (node[NodeTracker.nodeIdSymbol]) {
			return node[NodeTracker.nodeIdSymbol];
		}
		const id = NodeTracker.nextId;
		NodeTracker.nextId += 1;
		node[NodeTracker.nodeIdSymbol] = id;
		return id;
	}

	public static getWatchedNodeWithId(
		id: number,
		throwIfNotFound = true,
	): Node | undefined {
		if (NodeTracker.watchedNodesById.has(id)) {
			return NodeTracker.watchedNodesById.get(id);
		}
		if (throwIfNotFound) throw new Error(`Node with id not found -> ${id}`);
	}

	public static restore(id: number, node: Node): void {
		node[NodeTracker.nodeIdSymbol] = id;
		NodeTracker.watchedNodesById.set(id, node);
		if (id > NodeTracker.nextId) NodeTracker.nextId = id + 1;
	}
}

window.NodeTracker = NodeTracker;

export default interface ICommandCounter {
	nextCommandId: number;
	lastCommandId: number;
	emitter: NodeJS.EventEmitter;
}

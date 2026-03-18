import type { IAssertionCounts } from "@ulixee/hero-interfaces/IDomStateAssertionBatch";
import type ITimelineMetadata from "@ulixee/hero-interfaces/ITimelineMetadata";

export default interface IDomStateUpdatedEvent {
	id: string;
	name: string;
	assertionCounts: IAssertionCounts;
	heroSessions: {
		id: string;
		isFocused: boolean;
		isRunning: boolean;
		isPrimary: boolean;
		isSpawnedWorld: boolean;
		assertionCounts: IAssertionCounts;
		timelineRange?: [start: number, end: number];
		loadingRange?: [start: number, end: number];
		timelineOffsetPercents?: [start: number, end: number];
		timeline: ITimelineMetadata;
	}[];
}

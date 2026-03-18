import type IElementSummary from "../IElementSummary";
import type IResourceOverview from "../IResourceOverview";
import type ICommandFocusedEvent from "./ICommandFocusedEvent";
import type ICommandUpdatedEvent from "./ICommandUpdatedEvent";
import type IDatastoreCollectedAssetEvent from "./IDatastoreCollectedAssetEvent";
import type IDatastoreOutputEvent from "./IDatastoreOutputEvent";
import type IDomFocusEvent from "./IDomFocusEvent";
import type IDomStateUpdateEvent from "./IDomStateUpdatedEvent";
import type IDomUpdatedEvent from "./IDomUpdatedEvent";
import type IHeroSessionUpdatedEvent from "./IHeroSessionUpdatedEvent";
import type IInterceptInspectElementMode from "./IInterceptInspectElementMode";
import type ISessionAppModeEvent from "./ISessionAppModeEvent";
import type ISessionTimetravelEvent from "./ISessionTimetravelEvent";
import type ISourceCodeUpdatedEvent from "./ISourceCodeUpdatedEvent";

export default interface IChromeAliveSessionEvents {
	"Session.tabCreated": { tabId: number };
	"Session.appMode": ISessionAppModeEvent;
	"Session.closed": void;
	"Session.loading": void;
	"Session.loaded": void;
	"Session.updated": IHeroSessionUpdatedEvent;
	"Session.resource": { resource: IResourceOverview };
	"Session.timetravel": ISessionTimetravelEvent;
	"Session.interceptInspectElementMode": IInterceptInspectElementMode;
	"Datastore.output": IDatastoreOutputEvent;
	"Datastore.collected-asset": IDatastoreCollectedAssetEvent;
	"Dom.updated": IDomUpdatedEvent;
	"Dom.focus": IDomFocusEvent;
	"DomState.updated": IDomStateUpdateEvent;
	"Command.updated": ICommandUpdatedEvent;
	"Command.focused": ICommandFocusedEvent;
	"SourceCode.updated": ISourceCodeUpdatedEvent;
	"DevtoolsBackdoor.toggleInspectElementMode": { isActive: boolean };
	"DevtoolsBackdoor.elementWasSelected": { element: IElementSummary };
}

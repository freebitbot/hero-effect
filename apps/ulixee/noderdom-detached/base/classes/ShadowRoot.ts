import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDocumentFragment, IDocumentOrShadowRoot, IShadowRootMode, IElement, IShadowRoot } from '../interfaces';
import { IDocumentFragmentProperties, IDocumentFragmentReadonlyProperties, DocumentFragmentPropertyKeys, DocumentFragmentConstantKeys } from './DocumentFragment';
import { IDocumentOrShadowRootProperties, IDocumentOrShadowRootReadonlyProperties, DocumentOrShadowRootPropertyKeys, DocumentOrShadowRootConstantKeys } from '../mixins/DocumentOrShadowRoot';

export const { getState, setState, setHiddenState, setReadonlyOfShadowRoot } = StateMachine<
  IShadowRoot,
  IShadowRootProperties,
  IShadowRootReadonlyProperties
>('ShadowRoot');
export const internalHandler = new InternalHandler<IShadowRoot>('ShadowRoot', getState, setState);

// tslint:disable-next-line:variable-name
export function ShadowRootGenerator(DocumentFragment: Constructable<IDocumentFragment>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(DocumentFragment, [DocumentOrShadowRoot]) as unknown) as Constructable<IDocumentFragment & IDocumentOrShadowRoot>;

  return class ShadowRoot extends Parent implements IShadowRoot {
    constructor() {
      super();
      initializeConstantsAndPrototypes<ShadowRoot>(ShadowRoot, this, internalHandler, ShadowRootConstantKeys, ShadowRootPropertyKeys);
    }

    // properties

    public get host(): IElement {
      return internalHandler.get<IElement>(this, 'host', false);
    }

    public get innerHTML(): string {
      return internalHandler.get<string>(this, 'innerHTML', false);
    }

    public set innerHTML(value: string) {
      internalHandler.set<string>(this, 'innerHTML', value);
    }

    public get mode(): IShadowRootMode {
      return internalHandler.get<IShadowRootMode>(this, 'mode', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IShadowRootProperties extends IDocumentFragmentProperties, IDocumentOrShadowRootProperties {
  host?: IElement;
  innerHTML?: string;
  mode?: IShadowRootMode;
}

export interface IShadowRootReadonlyProperties extends IDocumentFragmentReadonlyProperties, IDocumentOrShadowRootReadonlyProperties {
  host?: IElement;
  mode?: IShadowRootMode;
}

// tslint:disable-next-line:variable-name
export const ShadowRootPropertyKeys = [...DocumentFragmentPropertyKeys, ...DocumentOrShadowRootPropertyKeys, 'host', 'innerHTML', 'mode'];

// tslint:disable-next-line:variable-name
export const ShadowRootConstantKeys = [...DocumentFragmentConstantKeys, ...DocumentOrShadowRootConstantKeys];

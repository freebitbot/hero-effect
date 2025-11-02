import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGStringList, ISVGTests } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  ISVGTests,
  ISVGTestsProperties,
  ISVGTestsReadonlyProperties
>('SVGTests');
export const internalHandler = new InternalHandler<ISVGTests>('SVGTests', getState, setState);

export default class SVGTests implements ISVGTests {
  public get requiredExtensions(): ISVGStringList {
    return internalHandler.get<ISVGStringList>(this, 'requiredExtensions', false);
  }

  public get systemLanguage(): ISVGStringList {
    return internalHandler.get<ISVGStringList>(this, 'systemLanguage', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGTestsProperties {
  requiredExtensions?: ISVGStringList;
  systemLanguage?: ISVGStringList;
}

export interface ISVGTestsReadonlyProperties {
  requiredExtensions?: ISVGStringList;
  systemLanguage?: ISVGStringList;
}

// tslint:disable-next-line:variable-name
export const SVGTestsPropertyKeys = ['requiredExtensions', 'systemLanguage'];

// tslint:disable-next-line:variable-name
export const SVGTestsConstantKeys = [];

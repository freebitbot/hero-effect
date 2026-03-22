import type { IFeaturePolicy } from "../../base/interfaces/official";
import {
	FeaturePolicyGenerator,
	type IFeaturePolicyProperties,
} from "../../base/official-klasses/FeaturePolicy";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IFeaturePolicy,
	IFeaturePolicyProperties
>();
const FeaturePolicyBaseClass = FeaturePolicyGenerator();

export default class FeaturePolicy
	extends FeaturePolicyBaseClass
	implements IFeaturePolicy {}

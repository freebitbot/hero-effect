import { ProcessingInstructionGenerator, setState } from '../../base/classes/ProcessingInstruction';
import { IProcessingInstruction } from '../../base/interfaces';
import NODE_TYPE from '../constants/NodeType';
import CharacterData from './CharacterData';

// tslint:disable-next-line:variable-name
const GeneratedProcessingInstruction = ProcessingInstructionGenerator(CharacterData);

export default class ProcessingInstruction extends GeneratedProcessingInstruction implements IProcessingInstruction {
  constructor() {
    super();
    setState(this, {
      nodeType: NODE_TYPE.PROCESSING_INSTRUCTION_NODE,
    });
  }
}

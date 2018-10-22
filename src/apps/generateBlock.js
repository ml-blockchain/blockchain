import FirstBlock from '../classes/Block/FirstBlock.class';
import Block from '../classes/Block/Block.class';
import saveFunction from '../utils/saveFunction';
import Person from '../classes/Person/Person.class';
import { testPublicKey } from '../../test/helpers/keys';
import ErrorHandler from '../lib/ErrorHandler';
import { setAppName } from '../helpers/output';

setAppName('block-gen');

const firstBlock = new FirstBlock();
const secondBlock = new Block(firstBlock);

const person = new Person(testPublicKey);
secondBlock.addPerson(person);



saveFunction(secondBlock)
  .then(() => output('New block created'))
  .catch(e => ErrorHandler.saveBlock(e))
  .finally(() => output('bye..'));

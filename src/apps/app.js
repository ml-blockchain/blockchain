import loadBlockFunction from '../utils/loadBlockFunction';
import ErrorHandler from '../lib/ErrorHandler';
import { setAppName } from '../helpers/output';
import startDoingBlockWork from '../startDoingBlockWork';

setAppName('app');

let block;

loadBlockFunction()
  .then(data => {
    block = data;
    output('block loaded successfully');
  })
  .catch(e => ErrorHandler.loadBlock(e))
  .finally(() => startDoingBlockWork(block));

import loadBlockFunction from '../utils/loadBlockFunction';
import ErrorHandler from '../lib/ErrorHandler';
import { setAppName } from '../helpers/output';
import startDoingBlockWork from '../startDoingBlockWork';

setAppName('app');

let block;

try {
  block = loadBlockFunction();
} catch (e) {
  ErrorHandler.initBlock(e);
} finally {
  startDoingBlockWork(block);
}

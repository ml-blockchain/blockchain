import loadBlockFunction from './utils/loadBlockFunction';
import ErrorHandler from './lib/ErrorHandler';

try {
  loadBlockFunction();
} catch (e) {
  ErrorHandler.loadBlock;
}

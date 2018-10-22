import fs from 'fs';
import ErrorHandler from '../lib/ErrorHandler';
import { BLOCK_FILE_NAME, BLOCK_FILE_PATH } from '../lib/constants';

export default block => {
  let string;
  try {
    string = JSON.stringify(block);
		localStorage.setItem(BLOCK_FILE_NAME, string)
	} catch (e) {
    return ErrorHandler.saveBlock(e);
  }
};

import fs from 'fs';
import ErrorHandler from '../lib/ErrorHandler';
import { BLOCK_FILE_NAME, BLOCK_FILE_PATH } from '../lib/constants';

export default async block => {
  let string;
  try {
    string = JSON.stringify(block);
  } catch (e) {
    return ErrorHandler.saveBlock(e);
  }
  return await fs.writeFile(`${BLOCK_FILE_PATH}/${BLOCK_FILE_NAME}`, string);
};

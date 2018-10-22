import { BLOCK_FILE_NAME, BLOCK_FILE_PATH } from '../lib/constants';

const readFile = path => global.block;
const parseJson = data => JSON.parse(data);

export default (path = BLOCK_FILE_PATH + BLOCK_FILE_NAME) =>
  new Promise(resolve => {
    resolve(readFile(path).then(data => parseJson(data)));
  });

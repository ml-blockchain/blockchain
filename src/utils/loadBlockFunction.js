import ErrorHandler from '../lib/ErrorHandler';

const readFile = () => global.block;
const parseJson = data => JSON.parse(data);

export default () => {
  try {
    parseJson(readFile());
  } catch (e) {
    ErrorHandler.loadBlock(e);
  }
};

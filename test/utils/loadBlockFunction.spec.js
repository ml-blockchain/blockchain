import fsMock from 'mock-fs';
import { BLOCK_FILE_NAME } from '../../src/lib/constants';
import loadBlockFunction from '../../src/utils/loadBlockFunction';

describe('loadBlockFunction()', () => {
  before(() =>
    fsMock({
      'path/to/dir': {
        [BLOCK_FILE_NAME]: '{}',
        badFile: '{1}'
      }
    })
  );

  after(() => fsMock.restore());

  it('should load the block');

  it('should fail to load a bad file');
});

import mock from 'mock-fs';
import { BLOCK_FILE_NAME, BLOCK_FILE_PATH } from '../../src/lib/constants';
import loadBlockFunction from '../../src/utils/loadBlockFunction';

describe('loadBlockFunction()', () => {
  before(() =>
    mock({
      'path/to/dir': {
        [BLOCK_FILE_NAME]: '{}',
        badFile: '{1}'
      }
    })
  );

  after(() => mock.restore());

  it('should load the block', done => {
    loadBlockFunction('path/to/dir/' + BLOCK_FILE_NAME)
      .then(() => done())
      .catch(e => console.log(e));
  });

  it('should fail to load a bad file', done => {
    loadBlockFunction('path/to/sdir/badFile')
      .then()
      .catch(() => {
        done();
      });
  });
});

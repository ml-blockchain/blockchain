import chai from 'chai';
import mock from 'mock-fs';
import fs from 'fs';
import saveFunction from '../../src/utils/saveFunction';
import { BLOCK_FILE_NAME } from '../../src/lib/constants';
import FirstBlock from '../../src/classes/Block/FirstBlock.class';
import Block from '../../src/classes/Block/Block.class';
const assert = chai.assert;

describe('saveFunction()', () => {
  const firstBlock = new FirstBlock();
  const secondBlock = new Block(firstBlock);

  before(() =>
    mock({
      'path/to/dir': {}
    })
  );

  after(() => mock.restore());

  it('should find save a file', done => {
    saveFunction(secondBlock).then(() => done());
  });

  it('should fine the file', done => {
    fs.readFile(BLOCK_FILE_NAME, function(err, data) {
      assert.isTrue(String(data) === JSON.stringify(secondBlock));
      done();
    });
  });
});

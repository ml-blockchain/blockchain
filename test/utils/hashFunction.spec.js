import hashFunction from '../../src/utils/crypto/hashFunction';
import chai from 'chai';

const assert = chai.assert;

describe('hashFunction()', () => {
  it('should hash an empty string', () => {
    const hash = hashFunction('');
    const expectedHash =
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    assert.isTrue(hash === expectedHash);
  });
});

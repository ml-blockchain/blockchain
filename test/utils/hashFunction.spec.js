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

  it('should hash an object', () => {
    const hash = hashFunction(new Object({}));
    const expectedHash =
      '44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a';
    assert.isTrue(hash === expectedHash);
  });

  it('should hash a different object', () => {
    const hash1 = hashFunction(new Object({}));
    const hash2 = hashFunction(new Object({ a: 1 }));
    assert.isTrue(hash1 !== hash2);
  });
});

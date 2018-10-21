import publicKeyVerifier from '../../src/utils/crypto/publicKeyVerifier';
import chai from 'chai';
import {testPublicKey} from "../keys";

const assert = chai.assert;

describe('publicKeyVerifier()', () => {
  it('should fail to verify key', () => {
    const verifier = publicKeyVerifier('');
    assert.isFalse(verifier);
  });

	it('should succeed to verify key', () => {
		const verifier = publicKeyVerifier(testPublicKey);
		assert.isTrue(verifier);
	});
});

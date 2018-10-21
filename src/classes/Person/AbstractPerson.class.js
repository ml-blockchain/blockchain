import { INITIAL_POINTS } from '../../lib/constants';
import publicKeyVerifier from '../../utils/crypto/publicKeyVerifier';

class AbstractPerson {
  constructor(publicKey) {
    this._points = INITIAL_POINTS;
    this._friends = [];

    if (publicKeyVerifier(publicKey)) this._publicKey = publicKey;
  }

  isValid() {
    return this._publicKey ? true : false;
  }

  get publicKey() {
    return this._publicKey;
  }

  get points() {
    return this._points;
  }

  get friends() {
    return this._friends;
  }
}

export default AbstractPerson;

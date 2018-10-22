import hashFunction from '../../utils/crypto/hashFunction';

class FirstBlock {
  constructor() {
    this._people = [];
    this._hash = hashFunction('first block');
    this._acceptedArticles = [];
  }

  get people() {
    return [];
  }

  get hash() {
    return hashFunction('first block');
  }

  get acceptedArticles() {
    return [];
  }

  print() {
    console.log("I'm the first block!");
  }
}

export default FirstBlock;

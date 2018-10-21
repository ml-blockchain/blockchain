import hashFunction from '../../utils/crypto/hashFunction';

class FirstBlock {
  constructor() {}

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

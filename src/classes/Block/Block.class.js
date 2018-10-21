import verifyNewPerson from '../../utils/verifiers/verifyNewPerson';
import ErrorHandler from '../../lib/ErrorHandler';
import verifyNewArticle from '../../utils/verifiers/verifyNewArticle';
import hashFunction from '../../utils/crypto/hashFunction';
import AbstractBlock from "./AbstractBlock.class";


class Block extends AbstractBlock{
  constructor(parentBlock) {
  	super(parentBlock);
  }

  addPerson(person) {
    if (verifyNewPerson()) {
      this._people.push(person);
    } else {
      return ErrorHandler.verifyNewPerson;
    }
  }

  addArticles(article) {
    if (verifyNewArticle()) {
      this._articles.push(article);
    } else {
      return ErrorHandler.verifyNewPerson;
    }
  }

  signBlock() {
    if (this._hash) return;

    const thisHash = hashFunction(this);
    const parentBlockHash = this._parentBlock.hash;

    this._hash = hashFunction(thisHash + parentBlockHash);
    this._date = new Date().getTime();
  }
}

export default Block;

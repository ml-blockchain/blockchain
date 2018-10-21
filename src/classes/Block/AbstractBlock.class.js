import clone from '../../utils/clone';

class AbstractBlock {
  constructor(parentBlock) {
    this._parentBlock = parentBlock;
    this._people = clone(parentBlock.people);
    this._acceptedArticles = clone(parentBlock.acceptedArticles);
    this._articles = [];
    this._hash = null;
    this._date = null;
  }

  get people() {
    return this._people;
  }

  get articles() {
    return this._articles;
  }

  get hash() {
    return this._hash;
  }

  get date() {
    return this._date;
  }

  get parentBlock() {
    return this._parentBlock;
  }

  get acceptedArticles() {
    return this._acceptedArticles;
  }

  print() {
    console.log('===== Block Start =====');
    console.log(`> Hash: ${this.hash}`);
    console.log(`> Parent hash: ${this.parentBlock.hash}`);
    console.log(`> Date of sign: ${this.date}`);
    console.log(`> # of people: ${this.people.length}`);
    console.log(`> # of articles: ${this.articles.length}`);
    console.log('^^^^^ Block End ^^^^^');
  }
}

export default AbstractBlock;

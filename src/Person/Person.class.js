import { INITIAL_POINTS } from '../lib/constants';

class Person {
  constructor(publicKey) {
    this.points = INITIAL_POINTS;
    this.articles = [];
    this.publicKey = publicKey;
  }
}

export default Person;

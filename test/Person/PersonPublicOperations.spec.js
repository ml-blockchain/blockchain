import chai from 'chai';
import Person from '../../src/Person/Person.class';
import { testPublicKey } from '../keys';
import { INITIAL_POINTS } from '../../src/lib/constants';

const assert = chai.assert;

describe('PersonPublicOperations class', () => {
  let person;
  before(() => {
    person = new Person(testPublicKey);
  });

  it('should have a public key', () =>
    assert.isTrue(person.publicKey === testPublicKey));

  it('should have a zero articles', () =>
    assert.isTrue(person.articles.length === 0));

  it('should have initial points', () =>
    assert.isTrue(person.points === INITIAL_POINTS));
});

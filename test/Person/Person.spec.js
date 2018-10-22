import chai from 'chai';
import Person from '../../src/classes/Person/Person.class';
import { testPublicKey, testPublicKey2 } from '../helpers/keys';
import { INITIAL_POINTS } from '../../src/lib/constants';

const assert = chai.assert;

describe('Person class', () => {
  let person;
  let nonValidPerson;

  before(() => (person = new Person(testPublicKey)));
  before(() => (nonValidPerson = new Person()));

  describe('Initiating a new person', () => {
    it('should have a public key', () =>
      assert.isTrue(person.publicKey === testPublicKey));

    it('should have initial points', () =>
      assert.isTrue(person.points === INITIAL_POINTS));

    it('should be a valid person', () => assert.isTrue(person.isValid()));

    it('should be a non-valid person', () =>
      assert.isFalse(nonValidPerson.isValid()));

    it('should have an empty friends', () =>
      assert.isTrue(person.friends.length === 0));
  });

	let newFriend = new Person(testPublicKey2);
  describe('Add friends', () => {

    before(() => person.addFriend(newFriend));

		it('should have one friend', () =>
			assert.isTrue(person.friends.length === 1));
  });

	describe('Remove friends', () => {
		before(() => person.removeFriend(testPublicKey2));

		it('should have zero friend', () =>
			assert.isTrue(person.friends.length === 0, `has ${person.friends.length} friends`));
	});
});

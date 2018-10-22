import AbstractPerson from './AbstractPerson.class';
import ErrorHandler from '../../lib/ErrorHandler';
import verifyNewFriend from '../../utils/verifiers/verifyNewFriend';

class Person extends AbstractPerson {
  constructor(publicKey) {
    super(publicKey);
  }

  addFriend(person) {
    if (verifyNewFriend(person)) {
      this._friends.push(person);
    } else {
      return ErrorHandler.verifyNewFriend;
    }
  }

  removeFriend(publicKey) {
    this._friends = this._friends.filter(
      friend => friend.publicKey !== publicKey
    );
  }
}

export default Person;

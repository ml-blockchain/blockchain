import chai from 'chai';
import Block from '../../src/classes/Block/Block.class';
import FirstBlock from '../../src/classes/Block/FirstBlock.class';
import { testPublicKey } from '../helpers/keys';
import Person from '../../src/classes/Person/AbstractPerson.class';
import BlockOperations from '../../src/classes/Block/BlockOperations.class';

const assert = chai.assert;

describe('Block class', () => {
  let firstBlock;
  let secondBlock;
  let thirdBlock;
  let forthBlock;

  before(() => (firstBlock = new FirstBlock()), 'create first block');
  before(() => (secondBlock = new Block(firstBlock)), 'create second block');
  before(() => (thirdBlock = new Block(secondBlock)), 'create second block');

  describe('second block', () => {
    it('should create an empty block', () => {
      assert.isTrue(secondBlock.people.length === 0);
      assert.isTrue(secondBlock.articles.length === 0);
    });

    it("should have the parent's block", () =>
      assert.isTrue(firstBlock.hash === secondBlock.parentBlock.hash));

    it("should have an empty people's list", () =>
      assert.isTrue(secondBlock.people.length === 0));
  });

  describe('third block', () => {
    after(() => thirdBlock.signBlock());

    it('should add a person', () => {
      const person = new Person(testPublicKey);
      thirdBlock.addPerson(person);
    });
  });

  describe('forth block', () => {
    before(() => (forthBlock = new Block(thirdBlock)));
    it('should have one person in the list', () =>
      assert.isTrue(forthBlock.people.length === 1));
  });

  describe('print tree', () => {
    it('print the tree', () => BlockOperations.printTree(forthBlock));
  });
});

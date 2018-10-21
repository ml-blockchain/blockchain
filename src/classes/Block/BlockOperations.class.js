class BlockOperations {
	/* The tree is just a linked list */
	static printTree(lastBlock) {
		let block = lastBlock;
		while(block) {
			block.print();
			block = block.parentBlock;
		}
	}
}

export default BlockOperations;
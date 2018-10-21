import clone from '../../src/utils/clone';
import chai from 'chai';

const assert = chai.assert;

describe('clone()', () => {
  it('should test clone with one level', () => {
    const x = new Object({ a: 1 });
    const y = clone(x);
    x.a = 2;
    assert.isTrue(y.a === 1);
  });

  it('should test clone with one level', () => {
    const x = new Object({ a: new Object({ b: 1 }) });
    const y = clone(x);
    x.a.b = 2;
    assert.isTrue(y.a.b === 1);
  });

	it('should test clone with array', () => {
		const x = new Object({ a: new Object({ b: [{c:1}] }) });
		const y = clone(x);
		x.a.b[0].c = 2;
		assert.isTrue(y.a.b[0].c === 1);
	});
});

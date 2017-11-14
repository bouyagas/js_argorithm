const expect = require('chai').expect;
const { isLessThan30 } = require('../algorithms/isLessThan30');


describe('isLessThan30', () => {
  it('should return a type of a boolean', () => {
    expect(typeof isLessThan30(10)).to.equal('boolean');
  });
})

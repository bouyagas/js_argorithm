const expect = require('chai').expect;
const { isLessThan } = require('../algorithms/isLessThan');

describe('isLessThan', () => {
  it('should return a type of a boolean', () => {
    expect(typeof isLessThan(10, 20)).to.equal('boolean');
  });

  it('should return true if num1 less than num2', () => {
   expect(isLessThan(10, 20)).to.be.true;
  });

  it('should return false if num2 less than num1', () => {
    expect(isLessThan(20, 10)).to.be.false;
  });

  it('should return false if num1 is equal to num2', () => {
    expect(isLessThan(10, 10)).to.be.false;
  });
})


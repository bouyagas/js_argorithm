const expect = require('chai').expect;
const { isGreaterThan10 } = require('../algorithms/isGreaterThan10');

describe('isGreaterThan10', () => {
  it('should return a type of boolean', () => {
    expect(typeof isGreaterThan10(40)).to.equal('boolean');
  });

  it('should return true if the number is greater than 10', () => {
    expect(isGreaterThan10(12)).to.be.true;
  });

  it('should return false if the number is less than 10', () => {
    expect(isGreaterThan10(9)).to.be.false;
  });

  it('should return false if the number is equal to 10', () => {
    expect(isGreaterThan10(10)).to.be.false;
  });
});

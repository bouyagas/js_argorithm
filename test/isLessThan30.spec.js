const expect = require('chai').expect;
const { isLessThan30 } = require('../algorithms/isLessThan30');


describe('isLessThan30', () => {

  it('should return a type of a boolean', () => {
    expect(typeof isLessThan30(10)).to.equal('boolean');
  });

  it('should return true if the number is less than 30 ', () => {
    expect(isLessThan30(4)).to.be.true;
  });

  it('should return false if the number is greater than 30', () => {
    expect(isLessThan30(400)).to.be.false;
  });

  it('should return false if the number is equal to 30', () => {
    expect(isLessThan30(30)).to.be.false;
  });
});

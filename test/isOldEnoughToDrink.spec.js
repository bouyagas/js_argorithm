const expect = require('chai').expect;
const { isOldEnoughToDrink } = require('../algorithms/isOldEnoughToDrink');

describe('isOldEnoughToDrink', () => {
  it('should return a boolean', () => {
    expect(typeof isOldEnoughToDrink(40)).to.equal("boolean");
  });
  it('should return whether the age is greater than 21', () => {
    expect(isOldEnoughToDrink(40)).to.be.true;
  });
  it('should return true if the age is 21', () => {
    expect(isOldEnoughToDrink(21)).to.be.true;
  });
});

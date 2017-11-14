const expect = require('chai').expect;
const { isOldEnoughToDrive } = require('../algorithms/isOldEnoughToDrive');

describe('isOldEnoughToDrive', () => {

  it('should return a boolean', () => {
    expect(typeof isOldEnoughToDrive(40)).to.equal('boolean');
  });

  it('should return true if the age is 16', () => {
    expect(isOldEnoughToDrive(16)).to.be.true;
  });

  it('should return false if the age is less than 16', () => {
    expect(isOldEnoughToDrive(15)).to.be.false;
  });
});

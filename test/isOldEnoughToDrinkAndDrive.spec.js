const expect = require('chai').expect;
const { isOldEnoughToDrinkAndDrive } = require('../algorithms/isOldEnoughToDrinkAndDrive');

describe('isOldEnoughToDrinkAndDrive', () => {
 it('should return a boolean', () => {
   expect(isOldEnoughToDrinkAndDrive(19)).to.be.true
 });

 it('should return false', () => {
   expect(isOldEnoughToDrinkAndDrive(99999)).to.be.false;
 });

});

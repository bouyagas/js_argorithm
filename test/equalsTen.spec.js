const expect = require('chai').expect;
const { equalsTen } = require('../algorithms/equalsTen');

describe('equalsTen', () => {

  it('should return a type of a boolean', () => {
    expect(typeof equalsTen(10)).to.equal('boolean');
  });

  it('should return false if number less than 10', () => {
    expect(equalsTen(8)).to.be.false;
  });

 it('should return false if number greater than 10', () => {
   expect(equalsTen(11)).to.be.false;
 });

 it('should return true if the number is equal to 10', () => {
   expect(equalsTen(10)).to.be.true;
 });
})


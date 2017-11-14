const expect = require('chai').expect;
const { checkAge } = require('../algorithms/checkAge');

describe('checkAge', () => {

  it('should return a string', () => {
    expect(checkAge('Dan', 22)).to.be.a('string');
  });

});

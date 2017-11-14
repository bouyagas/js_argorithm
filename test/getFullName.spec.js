const expect = require('chai').expect;
const { getFullName } = require('../algorithms/getFullName');

describe('getFullName', () => {

  it('should return a string', () => {
    expect(typeof getFullName('Rebecca', 'Solnit')).to.be.a('string');
  });
  it('should return a full name using firstName and lastName passed in the parameter', () => {
    expect(getFullName('mohamed', 'gassama')).to.equal('mohamed gassama');
  });
});

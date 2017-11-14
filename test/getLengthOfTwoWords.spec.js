const expect = require('chai').expect;
const { getLengthOfTwoWords } = require('../algorithms/getLengthOfTwoWords');

describe('getLengthOfTwoWords', () => {
  it('should return a type of string', () => {
    expect(typeof getLengthOfTwoWords('hello', 'world')).to.be.a('string');
  });

  it('should return the lengths of the two string ', () => {
    expect(getLengthOfTwoWords('foo', 'bar')).to.equal(6);
  });
});



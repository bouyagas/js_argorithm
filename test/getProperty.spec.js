const expect = require('chai').expect;
const { getProperty } = require('../algorithms/getProperty');

describe('getProperty', () => {
  let obj;

  before(() => {
    obj = {
      name: 'you'
    }
  });

  it('should return the value of the property located in the object at the passed in key', () => {
    expect(getProperty(obj, 'name')).to.include('you');
  });

  it("should return undefined when there is no property at the passed in key", () => {
    expect(getProperty(obj, 'age')).to.equal(undefined);
  });

});

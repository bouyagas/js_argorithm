const expect = require('chai').expect;
const { addProperty } = require('../algorithms/addProperty');

describe('addProperty', () => {
  let obj;

  beforeEach(() => {
    obj = {};
  });

  it('should add a property to the passed in object at the passed key', () => {
    addProperty(obj, 'testKey');
    expect(obj.testKey).to.be.ok;
  });

  it('should set the value at the passed in key to true on the passed in object', () => {
    addProperty(obj, 'testKey');
    expect(obj.testKey).to.be.true;
  });
});

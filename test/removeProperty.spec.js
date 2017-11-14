const expect = require('chai').expect;
const { removeProperty } = require('../algorithms/removeProperty');

describe('removeProperty', () => {
  let obj;

  before(() => {
    obj = {
      name: 'mel',
      age: 88
    };
  });

  it('should remove the property from the passed in object at the passed in key', () => {
    removeProperty(obj, 'name');
    expect(obj.name).to.be.undefined;
  });
});

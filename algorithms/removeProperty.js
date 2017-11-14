const removeProperty = (obj, key) => {
 delete obj[key];
};

const obj = {
  name: 'Sam',
  age: 20
};

removeProperty.call(this, obj, 'name');

module.exports = { removeProperty };

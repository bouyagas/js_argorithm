const addProperty = (obj, key) => {
  return obj[key] = true;
};

const myObj = {};
addProperty.call(this, myObj, 'myProperty');

module.exports = { addProperty };

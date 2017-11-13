const getProperty = (obj, key) => {
  return obj[key];
};

const obj = {
  key: 'value'
}

const output = getProperty.bind(this, obj);
output.call(this, 'key');

module.exports = { getProperty };

const isGreaterThan10 = (num) => {
  return num > 10
};

const output = isGreaterThan10.bind(this);
output.call(this, 11);

module.exports = { isGreaterThan10 };

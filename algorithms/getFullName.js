const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
};

const output = getFullName.bind(this, 'Joe');
output.call(this, 'Smith');

module.exports = { getFullName };

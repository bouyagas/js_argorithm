const checkAge = (name, age) => {
  if(age < 21) {
    return `Go home, ${name}!`
  } else {
    return `Welcome, ${name}!`
  }
};

const output = checkAge.bind(this, 'Adrian');
output.call(this, 22);

module.exports = { checkAge }

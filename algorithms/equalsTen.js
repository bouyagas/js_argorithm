const equalsTen = num => { return num === 10 };

const output = equalsTen.bind(this);
output.call(this, 9);

module.exports = { equalsTen };


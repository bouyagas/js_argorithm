const isLessThan30 = (num) => {
 return num < 30;
};

const output =  isLessThan30.bind(this);
output.call(this, 9);

module.exports = { isLessThan30 };

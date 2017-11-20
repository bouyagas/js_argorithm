const isLessThan =  (num1, num2) => { return num1 < num2 };

const output = isLessThan.bind(this);
console.log(output.apply(this, [20, 10]));

module.exports = { isLessThan };


const isOldEnoughToDrive = (age) => {
 return age >= 16
};

const output = isOldEnoughToDrive.bind(this);
output.call(this, 22);


module.exports = { isOldEnoughToDrive };


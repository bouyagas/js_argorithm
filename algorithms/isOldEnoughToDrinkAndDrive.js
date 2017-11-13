const isOldEnoughToDrinkAndDrive = (age) => {
  return age <= 21
};

const output = isOldEnoughToDrinkAndDrive.bind(this);
output.call(this, 22);

module.exports = { isOldEnoughToDrinkAndDrive };

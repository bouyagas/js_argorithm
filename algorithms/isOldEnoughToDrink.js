const isOldEnoughToDrink = (age) => {
  return age >= 21;
 };

isOldEnoughToDrink.call(this, 22);


module.exports = { isOldEnoughToDrink };

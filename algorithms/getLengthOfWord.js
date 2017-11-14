const getLengthOfWord = (word) => {
  return word.length;
};

const output = getLengthOfWord.bind(this);
output.call(this, 'some');

module.exports = { getLengthOfWord }

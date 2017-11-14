const getLengthOfTwoWords = (word1, word2) => {
  return (word1 + word2).length;
};

const output = getLengthOfTwoWords.bind(this);
output.apply(this, ['mohamed', 'gassama']);

module.exports = { getLengthOfTwoWords };

const expect = require('chai').expect;
const { getLengthOfWord } = require('../algorithms/getLengthOfWord.js');

describe('getLengthOfWord', () => {

 it('should return a number', () => {
   expect(typeof getLengthOfWord('word')).to.equal('number');
 });

 it('should return an exact length of the given string', () => {
   expect(getLengthOfWord('some')).to.equal(4);
 });

 it('should return the length of an empty word', () => {
   expect(getLengthOfWord('')).to.equal(0);
 });
});

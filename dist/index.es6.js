import _ from 'lodash';

var numRef = [
	{
		num: 1,
		word: "One"
	},
	{
		num: 2,
		word: "Two"
	},
	{
		num: 3,
		word: "Three"
	},
	{
		num: 4,
		word: "Four"
	},
	{
		num: 5,
		word: "Five"
	},
	{
		num: 0,
		word: "Zero"
	}
];

var echo = function echo(str) {
  console.log("Hi ".concat(str));
};

function numToWord(num) {
  return _.reduce(numRef, function (accum, ref) {
    echo('numToWord');
    return ref.num === num ? ref.word : accum;
  }, '');
}
function wordToNum(word) {
  return _.reduce(numRef, function (accum, ref) {
    echo('wordToNum');
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}

export { numToWord, wordToNum };

const blue = require("../blue.js");
/**
 * Counting Repetition of a string in an array.
 *
 * @param {array} words - An array of strings
 * @param {string} word - An array of objects with each time a 'firstName' and 'lastName' property
 * @returns {number} The number of time the string is present in the array
 */

var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(words, word) {
  var wordCount = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) wordCount++;
  }
  return wordCount;

  ////////// Answer
  // return words.filter(item => item === word).length;
}

// console.log(howManyTimes(words, "matter")); // returns 4

describe("#howManyTimes", () => {
  it("should return word occurrences in an array", () => {
    expect(howManyTimes(words, "machine")).toEqual(1);
    expect(howManyTimes(words, "matter")).toEqual(4);
  });

  it("should return how many time blue appears in the 1999 hit by Eiffel 65, I'm blue", () => {
    expect(howManyTimes(blue, "blue")).toEqual(30);
  });
});

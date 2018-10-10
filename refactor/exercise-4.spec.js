const blue = require("../blue.js");
/**
 * Counting words.
 *
 * @param {array} words - An array of strings
 * @returns {number} The number of time the string is present in the array
 */

function countWords(words) {
  var uniqueWords = [];
  for (var i = 0; i < words.length; i++) {
    var isExist = false;
    for (var j = 0; j < uniqueWords.length; j++) {
      if (words[i].toLowerCase() == uniqueWords[j].toLowerCase()) {
        isExist = true;
      }
    }
    if (!isExist) {
      uniqueWords.push(words[i]);
    }
    isExist = false;
  }
  return uniqueWords;
}

// console.log(countWords(blue));

describe("#countWords", () => {
  it("should return word occurrences in an array", () => {
    const uniqueWords = [
      "Yo",
      "listen",
      "up,",
      "here's",
      "the",
      "story",
      "About",
      "a",
      "little",
      "guy",
      "that",
      "lives",
      "in",
      "blue",
      "world",
      "And",
      "all",
      "day",
      "night",
      "everything",
      "he",
      "sees",
      "is",
      "just",
      "Like",
      "him,",
      "inside",
      "outside",
      "his",
      "house",
      "with",
      "window",
      "Corvette",
      "for",
      "him",
      "himself",
      "everybody",
      "around",
      "'Cause",
      "ain't",
      "got",
      "nobody",
      "to",
      "I'm",
      "da",
      "ba",
      "dee",
      "daa",
      "daa,",
      "I",
      "have",
      "color",
      "of",
      "wear",
      "are",
      "streets",
      "trees",
      "too",
      "girlfriend",
      "she",
      "so",
      "people",
      "here",
      "walk",
      "my",
      "Corvette,",
      "it's",
      "words",
      "say",
      "what",
      "think",
      "feelings",
      "live",
      "me"
    ];
    expect(countWords(blue)).toEqual(uniqueWords);
  });
});

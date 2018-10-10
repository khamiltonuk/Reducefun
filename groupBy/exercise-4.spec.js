const _ = require("lodash");

const words = ["Test", "Hello", "World", "Node", "JavaScript"];

const sortedAndCapitalized = function(orders) {
  // your code goes here
};

const worker = function(orders) {};

describe("#sortedAndCapitalized", () => {
  it("should return list of words capitalized and in alphabetical order", () => {
    expect(sortedAndCapitalized(words)).toEqual([
      "HELLOCHAINED",
      "JAVASCRIPTCHAINED",
      "NODECHAINED",
      "TESTCHAINED",
      "WORLDCHAINED"
    ]);
  });
});

/**
 * _.chain(value).
 *
 * chain lets you chain or link several Lo-Dash methods together
 * on a collection (arrays, objects) explicitly and then finally
 * returns the value of the whole operation when .value() function is called
 * https://lodash.com/docs/#chain
 *
 */

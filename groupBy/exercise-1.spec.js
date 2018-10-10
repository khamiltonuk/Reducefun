const _ = require("lodash");

const products = [
  { article: 41, quantity: 24 },
  { article: 2323, quantity: 2 },
  { article: 655, quantity: 23 }
];

function sortByQuantity(items) {
  // your code goes here
}

describe("#sortBy", () => {
  it("should return list of items sorted by quality starting with tht largest first", () => {
    expect(sortByQuantity(products)).toEqual([
      { article: 41, quantity: 24 },
      { article: 655, quantity: 23 },
      { article: 2323, quantity: 2 }
    ]);
  });
});

/**
 * sortBy.
 *
 * The sortBy function sorts the collection object (an Array of Objects, of primitive
 * types, or a mix of both) using the callback (as an Array, function, Object or String)
 * each iteration. Because `sortBy` only sorts from smallest to largest
 * https://lodash.com/docs/#sortBy
 *
 */

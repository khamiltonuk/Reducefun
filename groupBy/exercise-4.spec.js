const _ = require("lodash");

const orders = [
  { article: 1, quantity: 4 },
  { article: 2, quantity: 2 },
  { article: 1, quantity: 5 }
];

const sortedOrders = function(orders) {
  // your code goes here
};

describe("#sortedOrders", () => {
  it("Calculates the total number of orders for each article Sorts the resulting array so that the articles with the highest number of orders are on top", () => {
    expect(sortedOrders(orders)).toEqual([
      { article: 1, total_orders: 9 },
      { article: 2, total_orders: 2 }
    ]);
  });
});

/**
 * _.reduce(collection, [callback=identity], [accumulator]).
 *
 * reduce goes through collection, calls callback each time
 * and takes a rolling accumulator that it will provide to each call.
 * Each iteration, callback will be called as callback(accumulator,
 * value, index|key, collection) (Finally, a different callback!).
 * https://lodash.com/docs/#reduce
 *
 */

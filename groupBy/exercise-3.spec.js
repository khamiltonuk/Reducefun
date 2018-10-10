const _ = require("lodash");

const comments = [
  { username: "tim", comment: "you are doing a great job!" },
  { username: "tim", comment: "when you have new workshoppers?" },
  { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
  { username: "max", comment: "where have you been on friday? we missed you!" },
  { username: "max", comment: "You don't answer anymore - why?" },
  { username: "cat_lover", comment: "MORE cats!!!" },
  { username: "max", comment: "i really love your site" }
];

const countTheComments = function(comments) {
  // your code goes here

  ////////// Answer
  return _.chain(comments)
    .groupBy("username")
    .map((item, username) => ({
      username,
      comment_count: _.size(item)
    }))
    .sortBy("comment_count")
    .reverse()
    .value();
};

describe("#countTheComments", () => {
  it("should return list users with the person with the most comments first", () => {
    expect(countTheComments(comments)).toEqual([
      { comment_count: 3, username: "max" },
      { comment_count: 2, username: "cat_lover" },
      { comment_count: 2, username: "tim" }
    ]);
  });
});

/**
 * _.groupBy(collection, [callback=identity])
 *
 * Creates an object composed of keys generated from the results of running
 * each element of a collection Object through callback. The corresponding
 * value of each key is an array of the elements for which the key was generated.
 * https://lodash.com/docs/#groupBy
 *
 */

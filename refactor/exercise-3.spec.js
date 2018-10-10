/**
 * Max of matrix.
 *
 * @param {array} matrix - A two dimensional array of numbers
 * @returns {number} The maximum number of this matrix
 */

function maxMatrix(matrix) {
  var highestNumber = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var a = 0; a < matrix[i].length; a++) {
      if (matrix[i][a] > highestNumber) {
        highestNumber = matrix[i][a];
      }
    }
  }
  return highestNumber;

  ////////// Answer
  // return Math.max(...[].concat.apply([], matrix));
}
const matrixReloaded = [[1, 6, 7], [7, 8, 4], [3, 5, 0]];

//console.log(maxMatrix(matrixReloaded)); // return 8

describe("#howManyTimes", () => {
  it("should return word highest value in matrix", () => {
    expect(maxMatrix(matrixReloaded)).toEqual(8);
  });

  it("should return highest value in asymetrical matrix ", () => {
    const theMatrixRevolutions = [
      [29, 12, 29, 29, 14, 12, 11, 26],
      [13],
      [26, 30, 12],
      [8, 9, 15, 8, 16, 19, 3, 14],
      [1, 1, 12, 14, 13],
      [15, 22, 8, 1, 7, 19, 13],
      [19, 24, 21, 19, 21, 9, 25, 28],
      [18, 10, 6]
    ];
    expect(maxMatrix(theMatrixRevolutions)).toEqual(30);
  });
});

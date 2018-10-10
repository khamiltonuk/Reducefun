/**
 * Longest full name.
 *
 * @param {array} persons - An array of objects with each time a 'firstName' and 'lastName' property
 * @returns {string} The longest full name (with a space in between).
 */

const wolfPack = [
  { firstName: "Christian", lastName: "Wiggert" },
  { firstName: "Marko", lastName: "Kovacevic" },
  { firstName: "Oleksandr", lastName: "Hrishchuk" },
  { firstName: "Philipp", lastName: "Giese" },
  { firstName: "Gisa", lastName: "Klement" },
  { firstName: "Herman", lastName: "Dahlén" },
  { firstName: "Stefan", lastName: "Herz" },
  { firstName: "Kristian", lastName: "Hamilton" }
];

function longestFullName(persons) {
  longestName = "";
  for (var i = 0; i < persons.length; i++) {
    if (
      persons[i].firstName.length + persons[i].lastName.length >
      longestName.length
    ) {
      longestName = persons[i].firstName + " " + persons[i].lastName;
    }
  }
  return longestName;
}

// console.log(longestFullName(wolfPack)) //returns "Oleksandr Hrishchuk"

describe("#longestFullName", () => {
  it("should return the longest full name of wolfpack with a space in between", () => {
    expect(longestFullName(wolfPack)).toEqual("Oleksandr Hrishchuk");
  });

  it("should return the longest full name with a space in between", () => {
    const persons = [
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Lopez" },
      { firstName: "Charly", lastName: "Martin" }
    ];
    expect(longestFullName(persons)).toEqual("Charly Martin");
  });
});

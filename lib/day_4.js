const { List } = require("immutable");

const sortWord = word => List(word).sort().join("");

const rowIsValidPartA = row => List(row.split(" ")).equals(List(new Set(row.split(" "))));

const rowIsValidPartB = row => List(row.split(" ").map(sortWord)).equals(List(new Set(row.split(" ").map(sortWord))));

const makeRows = data => List(data.split("\n"));

const solution = filter => data => makeRows(data).filter(filter).size;
const partA = solution(rowIsValidPartA);
const partB = solution(rowIsValidPartB);

// const loadFile = require("./utils/loadFile");
//
// const input = loadFile(`${__dirname}/resources/day_4.txt`);
// console.log(`Answer PartA: ${partA(input)}`);
// console.log(`Answer PartB: ${partB(input)}`);

module.exports = {
  rowIsValidPartA,
  rowIsValidPartB,
  makeRows,
  sortWord,
  partA,
  partB
};
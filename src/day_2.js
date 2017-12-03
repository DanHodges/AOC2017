const parse = item => parseInt(item);
const isNumber = item => !isNaN(item);
const stringWithTabsToArrayOfInts = string =>
  string
    .split(["\t"])
    .map(parse)
    .filter(isNumber);

const rowDifference = array => Math.max(...array) - Math.min(...array);
const sort = array => array.sort((a, b) => b - a);
const sum = (a, b) => a + b;

const evenlyDivisibleNumber = (value, index, array) =>
  array.slice(index + 1).reduce((acc, item) => {
    if (acc) return acc;
    return value % item === 0 ? value / item : 0;
  }, 0);

const findProduct = array =>
  sort(array)
    .map(evenlyDivisibleNumber)
    .reduce(sum, 0);

const makeRows = data => data.split("\n").map(stringWithTabsToArrayOfInts);

const checksumA = data =>
  makeRows(data)
    .map(rowDifference)
    .reduce(sum, 0);

const checksumB = data =>
  makeRows(data)
    .map(findProduct)
    .reduce(sum, 0);

const loadFile = require("./utils/loadFile");

const input = loadFile(`${__dirname}/resources/day_2.txt`);
console.log(`Answer checksumA: ${checksumA(input)}`);
console.log(`Answer checksumB: ${checksumB(input)}`);

module.exports = {
  checksumA,
  checksumB,
  makeRows,
  rowDifference,
  findProduct,
};

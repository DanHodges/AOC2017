const { List } = require("immutable");

const increment = value => value + 1;
const incrementOrDecrement = value => (value > 2 ? value - 1 : value + 1);

const countJumpsB = (list, index, step) => {
  const value = list.get(index);
  if (value === undefined) return step;

  return countJumpsB(
    list.set(index, incrementOrDecrement(value)),
    index + value,
    step + 1,
  );
};

const countJumpsA = (list, index, step) => {
  const value = list.get(index);
  if (value === undefined) return step;

  return countJumpsA(
    list.set(index, increment(value)),
    index + value,
    step + 1,
  );
};

const makeList = data => List(data.split("\n").map(i => parseInt(i, 10)));
const partA = data => countJumpsA(makeList(data), 0, 0);
const partB = data => countJumpsB(makeList(data), 0, 0);

const loadFile = require("./utils/loadFile");
const input = loadFile(`${__dirname}/../resources/day_5.txt`);
console.log(`Answer PartA: ${countJumps(makeList(input), 0, 0)}`);
console.log(`Answer PartB: ${countJumpsPartB(makeList(input), 0, 0)}`);

module.exports = {
  partA,
  partB,
  countJumpsA,
  countJumpsB,
  makeList,
};

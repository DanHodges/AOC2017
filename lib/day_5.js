const { List } = require("immutable");

const increment = value => value + 1;
const incrementOrDecrement = value => value > 2 ? value - 1 : value + 1;

const countJumpsB = (list, index, step) => {
  var _repeat = true;

  var _list, _index, _step;

  while (_repeat) {
    _repeat = false;

    const value = list.get(index);
    if (value === undefined) return step;

    _list = list.set(index, incrementOrDecrement(value));
    _index = index + value;
    _step = step + 1;
    list = _list;
    index = _index;
    step = _step;
    _repeat = true;
    continue;
  }
};
const countJumpsA = (list, index, step) => {
  var _repeat2 = true;

  var _list2, _index2, _step2;

  while (_repeat2) {
    _repeat2 = false;

    const value = list.get(index);
    if (value === undefined) return step;

    _list2 = list.set(index, increment(value));
    _index2 = index + value;
    _step2 = step + 1;
    list = _list2;
    index = _index2;
    step = _step2;
    _repeat2 = true;
    continue;
  }
};

const makeList = data => List(data.split("\n").map(i => parseInt(i, 10)));
const partA = data => countJumpsA(makeList(data), 0, 0);
const partB = data => countJumpsB(makeList(data), 0, 0);

module.exports = {
  partA,
  partB,
  countJumpsA,
  countJumpsB,
  makeList
};

const loadFile = require("./utils/loadFile");

const input = loadFile(`${__dirname}/../resources/day_5.txt`);
// console.log(`Answer PartA: ${countJumps(makeList(input), 0, 0)}`);
// console.log(`Answer PartB: ${countJumpsPartB(makeList(input), 0, 0)}`);
const { List } = require("immutable");

const moveRight = coord => ({
  ...coord,
  x: coord.x + 1,
  index: coord.index + 1,
});
const moveLeft = coord => ({
  ...coord,
  x: coord.x - 1,
  index: coord.index + 1,
});
const moveUp = coord => ({
  ...coord,
  y: coord.y + 1,
  index: coord.index + 1,
});
const moveDown = coord => ({
  ...coord,
  y: coord.y - 1,
  index: coord.index + 1,
});

// const findAdj = data => { const { x: lastX, y: lastY } = data.last();
//   return data
//     .filter(({ x, y }) => Math.abs(lastX - x) < 2 && Math.abs(lastY - y) < 2)
//     .map(item => item.adjSum)
//     .reduce((a, b) => a + b, 0);
// };

const addCoordinate = direction => (data, times, count = 0) =>
  times === count
    ? data
    : addCoordinate(direction)(
        data.push(direction(data.last())),
        times,
        count + 1,
      );

const addCoordinateRight = addCoordinate(moveRight);
const addCoordinateLeft = addCoordinate(moveLeft);
const addCoordinateUp = addCoordinate(moveUp);
const addCoordinateDown = addCoordinate(moveDown);

const makeGraph = (
  size,
  index = 1,
  data = List([{ x: 0, y: 0, index: 1 }]),
) => {
  if (data.size >= size) return data;

  const newList = move(index, data, index % 2 === 1);

  return makeGraph(size, index + 1, newList);
};

const move = (howManyTimes, data, rightAndUp) =>
  rightAndUp
    ? addCoordinateUp(addCoordinateRight(data, howManyTimes), howManyTimes)
    : addCoordinateDown(addCoordinateLeft(data, howManyTimes), howManyTimes);

const partA = input => {
  const { x, y } = makeGraph(input)
    .reverse()
    .find(({ index }) => index === input);
  return Math.abs(x) + Math.abs(y);
};

const bar = input => makeGraph(input).toJS();
console.log(partA(12));

module.exports = { partA };

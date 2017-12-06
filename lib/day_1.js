const matchesNext = (item, index, array) => item === array[(index + 1) % array.length];

const matchesHalfwayAround = (item, index, array) => item === array[(index + array.length / 2) % array.length];

const sum = (a, b) => a + b;

const solution = filter => data => Array.from(data).map(item => parseInt(item, 10)).filter(filter).reduce(sum, 0);

const partA = solution(matchesNext);
const partB = solution(matchesHalfwayAround);

module.exports = { partA, partB };

// const loadFile = require("./utils/loadFile");
// const input = loadFile(`${__dirname}/resources/day_1.txt`);
// console.log(`Answer PartA: ${partA(input)}`);
// console.log(`Answer PartB: ${partB(input)}`);
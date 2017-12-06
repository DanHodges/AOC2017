const { List } = require("immutable");

const { makeList, countJumpsA, countJumpsB } = require("../src/day_5");

describe("step counter", () => {
  let data;

  beforeEach(() => {
    data = "0\n3\n0\n1\n-3";
  });

  test("should make a List", () => {
    expect(makeList(data)).toEqual(List([0, 3, 0, 1, -3]));
  });

  test("should count jumps", () => {
    expect(countJumpsA(List([0, 3, 0, 1, -3]), 0, 0)).toEqual(5);
  });

  test("should count jumps part b", () => {
    expect(countJumpsB(List([0, 3, 0, 1, -3]), 0, 0)).toEqual(10);
  });
});

const { makeGraph } = require("../day_3");

describe("calculate steps in spiral memory", () => {
  test("should create a graph of x y coordinates", () => {
    expect(makeGraph(9)).toEqual([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]);
  });
});

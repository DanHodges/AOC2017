const { List } = require("immutable");
const { makeGraph, partA, findAdjacentCoordinates } = require("../day_3");

describe("calculate steps in spiral memory", () => {
  let graph;
  beforeEach(() => {
    graph = List([
      { index: 1, x: 0, y: 0 },
      { index: 2, x: 1, y: 0 },
      { index: 3, x: 1, y: 1 },
      { index: 4, x: 0, y: 1 },
      { index: 5, x: -1, y: 1 },
      { index: 6, x: -1, y: 0 },
      { index: 7, x: -1, y: -1 },
      { index: 8, x: 0, y: -1 },
      { index: 9, x: 1, y: -1 },
      { index: 10, x: 2, y: -1 },
      { index: 11, x: 2, y: 0 },
      { index: 12, x: 2, y: 1 },
      { index: 13, x: 2, y: 2 },
    ]);
  });

  test("should create a graph of x y coordinates", () => {
    expect(makeGraph(9)).toEqual(graph);
  });

  test("should calculate steps given an index", () => {
    expect(partA(12)).toEqual(3);
  });

  test("should find adjacent coordinates", () => {
    expect(findAdjacentCoordinates(graph.take(2))).toEqual(graph.take(1));
    expect(findAdjacentCoordinates(graph.take(5))).toEqual(
      List([{ index: 1, x: 0, y: 0 }, { index: 4, x: 0, y: 1 }]),
    );
  });
});

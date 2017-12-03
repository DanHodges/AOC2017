const {
  checksumA,
  checksumB,
  makeRows,
  rowDifference,
  findProduct,
} = require("../day_2");

describe("calculate a checksum part A", () => {
  let data;
  let rowTwo;
  beforeEach(() => {
    data = "5\t1\t9\t5\n\t7\t5\t3\n2\t4\t6\t8";
    rowTwo = makeRows(data)[1];
  });

  test("should make rows of numbers", () => {
    expect(makeRows(data)).toEqual([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]);
  });

  test("should calculate the difference of a rows min and max value", () => {
    expect(rowDifference(rowTwo)).toBe(4);
  });

  test("should sum all row differences", () => {
    expect(checksumA(data)).toBe(18);
  });

  test("should find evenly divisible numbers", () => {
    expect(checksumA(data)).toBe(18);
  });
});

describe("calculate a checksum part B", () => {
  let row;
  let data;
  beforeEach(() => {
    data = "5\t9\t2\t8\n\t9\t4\t7\t3\n\t3\t8\t6\t5";
    row = [5, 9, 2, 8];
  });

  test("should find the product of a row", () => {
    expect(findProduct(row)).toBe(4);
  });

  test("should sum the products of each row", () => {
    expect(checksumB(data)).toBe(9);
  });
});

const { partA, partB } = require("../src/day_1");

describe("partA", () => {
  test("should work with 1122", () => {
    expect(partA("1122")).toBe(3);
  });

  test("should work with 1111", () => {
    expect(partA("1111")).toBe(4);
  });

  test("should work with 1234", () => {
    expect(partA("1234")).toBe(0);
  });

  test("should work with 91212129", () => {
    expect(partA("91212129")).toBe(9);
  });
});

describe("partB", () => {
  test("should work with 1212", () => {
    expect(partB("1212")).toBe(6);
  });

  test("should work with 1221", () => {
    expect(partB("1221")).toBe(0);
  });

  test("should work with 123425", () => {
    expect(partB("123425")).toBe(4);
  });

  test("should work with 123123", () => {
    expect(partB("123123")).toBe(12);
  });

  test("should work with 12131415", () => {
    expect(partB("12131415")).toBe(4);
  });
});

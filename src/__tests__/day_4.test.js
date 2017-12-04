const { List } = require("immutable");

const {
  rowIsValidPartA,
  makeRows,
  rowIsValidPartB,
  sortWord,
  partA,
} = require("../day_4");

describe("password validator", () => {
  test("should tell if a row is valid part A", () => {
    expect(rowIsValidPartA("aa bb cc dd ee")).toEqual(true);
    expect(rowIsValidPartA("aa bb cc dd ee aaa")).toEqual(true);
  });

  test("should tell if a row is not valid", () => {
    expect(rowIsValidPartA("aa bb cc dd aa")).toEqual(false);
  });

  test("should be able to make rows", () => {
    expect(makeRows("bdwdjjo avricm ivsof\nsrceh xdwao reshc shecr")).toEqual(
      List(["bdwdjjo avricm ivsof", "srceh xdwao reshc shecr"]),
    );
  });

  test("should be able to count valid phrases", () => {
    expect(partA("bdwdjjo avricm ivsof\nsrceh xdwao reshc shecr")).toEqual(2);
  });

  test("should sort a word", () => {
    expect(sortWord("edcba")).toEqual("abcde");
  });

  test("should tell if row is valid part B", () => {
    expect(rowIsValidPartB("abcde fghij")).toEqual(true);
    expect(rowIsValidPartB("abcde xyz ecdab")).toEqual(false);
  });
});

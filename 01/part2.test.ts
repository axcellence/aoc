import { expect, test } from "bun:test";
import { processInput, translateNumberWords } from "./part2";

test("translate numbers from string", () => {
  expect(translateNumberWords("two1nine")).toBe("219");
  expect(translateNumberWords("eightwothree")).toBe("83");
  expect(translateNumberWords("abcone2threexyz")).toBe("123");
  expect(translateNumberWords("xtwone3four")).toBe("234");
  expect(translateNumberWords("4nineeightseven2")).toBe("49872");
  expect(translateNumberWords("zoneight234")).toBe("1234");
  expect(translateNumberWords("7pqrstsixteen")).toBe("716");
});

const strings = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

test("process input", () => {
  expect(processInput(strings)).toEqual([
    "219",
    "83",
    "123",
    "234",
    "49872",
    "1234",
    "716",
  ]);
}
);
const path = "./01/input.txt";
const file = Bun.file(path);

const inputText = await file.text();

const numberMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  eleven: "11",
  twelve: "12",
  thirteen: "13",
  fourteen: "14",
  fifteen: "15",
  sixteen: "16",
  seventeen: "17",
  eighteen: "18",
  nineteen: "19",
  twenty: "20",
} as const;

export function translateNumberWords(line: string) {
  const keys = Object.keys(numberMap).sort((a, b) => b.length - a.length); // Sort by length to match longer words first
  const regex = new RegExp(keys.join("|"), "g");

  return line
    .replace(regex, (match) =>
      numberMap[match as keyof typeof numberMap].toString()
    )
    .replace(/\D/g, "");
}

export function processInput(input: string) {
  return input
    .split("\n")
    .map(translateNumberWords)
    .filter((value) => value !== "");
}

export function convertToNumbers(input: string[]) {
  return input.map((digits) => {
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
    return Number(`${firstDigit}${lastDigit}`);
  });
}

function sum(input: number[]) {
  return input.reduce((acc, value) => acc + value, 0);
}

function solution(input: string) {
  const processed = processInput(input);
  return sum(convertToNumbers(processed));
}
console.log(solution(inputText));

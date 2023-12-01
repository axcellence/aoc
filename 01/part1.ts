const path = "./01/input.txt";
const file = Bun.file(path);

const inputText = await file.text();

function getNumbers(input: string) {
  return input
    .split("\n")
    .map((line) => line.match(/\d/g) || [])
    .filter((digits) => digits.length > 0)
    .map((digits) => {
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      return Number(`${firstDigit}${lastDigit}`);
    })
    .filter((value) => value !== null);
}

function sum(input: number[]) {
  return input.reduce((acc, value) => acc + value, 0);
}

function solution(input: string) {
  const numbers = getNumbers(input);
  return sum(numbers);
}

console.log(solution(inputText));

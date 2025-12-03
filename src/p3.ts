import { readInputForDay, readInputForDayExample } from "../util";


export const part1 = (input: string[]) => {
  return input.reduce((sum, batteries) => {
    let best = 0;
    for (let i = 0; i < batteries.length; i++)
      for (let j = i + 1; j < batteries.length; j++)
        best = Math.max(best, Number(batteries[i] + batteries[j]));
    return sum + best;
  }, 0);
};

export const part2 = (input: string[]) => {
  const numDigits = 12;
  return input.reduce<bigint>((sum, bank) => {
    let batteriesToDrop: number = bank.length - numDigits;
    const stack: string[] = [];

    for (const digit of bank) {
      while (batteriesToDrop > 0 && stack.length && stack[stack.length - 1] < digit) {
        stack.pop();
        batteriesToDrop--;
      }
      stack.push(digit);
    }
    const best = stack.slice(0, numDigits).join("");
    return sum + BigInt(best);
  }, 0n);
};

const DAY = Number("3")

export const main = async () => {
  const data = await readInputForDay(DAY);
  console.log("Result part 1", part1(data));
  console.log("Result part 2", part2(data));
};
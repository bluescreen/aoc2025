import {  readInputForDay } from "../util";

export const part1 = (input: string[]) => {
  let dial = 50, zeros = 0;
  for (const line of input) {
    const direction = line[0];
    const rotate = Number(line.slice(1));

    dial = (dial + (direction === "L" ? -rotate : rotate) + 100) % 100;
    if (dial === 0) zeros++;
  }

  return zeros;
};

export const part2 = (input: string[]) => {
  let dial = 50, zeros = 0;

  for (const line of input) {
    const direction = line[0];
    let rotate = Number(line.slice(1));
    if (direction === "L") rotate = -rotate;

    zeros += Math.floor(Math.abs(rotate) / 100);

    for (let i = 0; i < Math.abs(rotate) % 100; i++) {
      dial = (dial + Math.sign(rotate) + 100) % 100;
      if (dial === 0) zeros++;
    }
  }

  return zeros;
};

export const main = async () => {
  const data = await readInputForDay(1);
  console.log("Result part 1", part1(data));
  console.log("Result part 2", part2(data));
};


import { readInputForDayRaw } from "../util";


export const part1 = (input: string) => {
  return input.split(",").reduce((sum, pair) => {
    const [a, b] = pair.split("-").map(Number);
    for (let n = a; n <= b; n++) if (isInvalidPart1(n)) sum += n;
    return sum;
  }, 0);
};

export const part2 = (input: string) => {
  return input.split(",").reduce((sum, pair) => {
    const [a, b] = pair.split("-").map(Number);
    for (let n = a; n <= b; n++) if (isInvalidPart2(n)) sum += n;
    return sum;
  }, 0);
};

const DAY = Number("2")

export const main = async () => {
  const data = await readInputForDayRaw(DAY);
  console.log("Result part 1", part1(data));
  console.log("Result part 2", part2(data));
};


function isInvalidPart1(n: number): boolean {
  const s = String(n);
  if (s.length % 2) return false;
  const h = s.length / 2;
  return s.slice(0, h) === s.slice(h);
}

function isInvalidPart2(n: number): boolean {
  const s = String(n);
  const len = s.length;

  for (let k = 1; k <= len / 2; k++) {
    if (len % k) continue;             
    const sub = s.slice(0, k);
    if (sub.repeat(len / k) === s) return true;
  }
  return false;
}


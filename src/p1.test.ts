import { expect, describe, test as it } from "bun:test";
import { part1, part2 } from "./p1";
import { readInputForDay, readInputForDayExample } from "../util";

const EXAMPLE_PART1 = 3; 
const RESULT_PART1 = 1076; 

const EXAMPLE_PART2 = 6; 
const RESULT_PART2 = 6379; 

describe("day 1", () => {
  describe("part 1", () => {
    it("example", async () => {
      const data = await readInputForDayExample(1);
      expect(part1(data)).toEqual(EXAMPLE_PART1);
    });

    it("input", async () => {
      const data = await readInputForDay(1);
      expect(part1(data)).toEqual(RESULT_PART1);
    });
  });

  describe("part 2", () => {
    it("example", async () => {
      const data = await readInputForDayExample(1);
      expect(part2(data)).toEqual(EXAMPLE_PART2);
    });

    it("input", async () => {
      const data = await readInputForDay(1);
      expect(part2(data)).toEqual(RESULT_PART2);
    });
  });
});

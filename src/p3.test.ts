import { expect, describe, test as it } from "bun:test";
import { part1, part2 } from "./p3";
import { readInputForDay, readInputForDayExample } from "../util";

const DAY = Number("3")
const EXAMPLE_PART1 = 357; 
const RESULT_PART1 = 17316; 

const EXAMPLE_PART2 = 3121910778619n; 
const RESULT_PART2 = 0n; 



describe("day 3", () => {
  describe("part 1", () => {
    it("example", async () => {
      const data = await readInputForDayExample(DAY);
      expect(part1(data)).toEqual(EXAMPLE_PART1);
    });

    it("input", async () => {
      const data = await readInputForDay(DAY);
      expect(part1(data)).toEqual(RESULT_PART1);
    });
  });

  describe("part 2", () => {
    it("example", async () => {
      const data = await readInputForDayExample(DAY);
      expect(part2(data)).toEqual(EXAMPLE_PART2);
    });

    it("input", async () => {
      const data = await readInputForDay(DAY);
      expect(part2(data)).toEqual(RESULT_PART2);
    });
  });
});

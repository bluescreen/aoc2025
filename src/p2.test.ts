import { expect, describe, test as it } from "bun:test";
import { part1, part2 } from "./p2";
import {  readInputForDayExampleRaw, readInputForDayRaw } from "../util";

const DAY = Number("2")
const EXAMPLE_PART1 = 1227775554; 
const RESULT_PART1 = 13108371860; 

const EXAMPLE_PART2 = 4174379265; 
const RESULT_PART2 = 22471660255; 



describe("day 2", () => {
  describe("part 1", () => {
    it("example", async () => {
      const data = await readInputForDayExampleRaw(DAY);
      expect(part1(data)).toEqual(EXAMPLE_PART1);
    });

    it("input", async () => {
      const data = await readInputForDayRaw(DAY);
      expect(part1(data)).toEqual(RESULT_PART1);
    });
  });

  describe("part 2", () => {
    it("example", async () => {
      const data = await readInputForDayExampleRaw(DAY);
      expect(part2(data)).toEqual(EXAMPLE_PART2);
    });

    it("input", async () => {
      const data = await readInputForDayRaw(DAY);
      expect(part2(data)).toEqual(RESULT_PART2);
    });
  });
});

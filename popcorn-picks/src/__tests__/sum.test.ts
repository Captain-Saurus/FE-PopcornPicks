import { sum } from "../sum";

test("1+2는 3이야", () => {
  expect(sum(1, 2)).toBe(3);
});

test("1+3는 3이야", () => {
  expect(sum(1, 3)).toBe(3);
});

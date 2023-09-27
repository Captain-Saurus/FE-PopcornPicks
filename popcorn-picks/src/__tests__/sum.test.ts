import { sum } from "../sum";

test("1+2는 3이야", () => {
  expect(sum(1, 2)).toBe(3);
});

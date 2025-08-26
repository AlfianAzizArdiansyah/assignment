import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum(2, 3) should equal 5", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("sum(-2, -3) should equal -5", () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test("sum(0, 5) should equal 5", () => {
  assert.strictEqual(sum(0, 5), 5);
});

test("sum(-4, 6) should equal 2", () => {
  assert.strictEqual(sum(-4, 6), 2);
});

import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum of two positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 5), 5);
});

test("sum with one negative number should return 0", () => {
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(2, -3), 0);
});

test("sum with both negative numbers should return 0", () => {
  assert.strictEqual(sum(-2, -3), 0);
});

test("sum with non-number inputs should return 0", () => {
  assert.strictEqual(sum("a", 3), 0);
  assert.strictEqual(sum(2, "b"), 0);
  assert.strictEqual(sum("a", "b"), 0);
});

test("sum with zero values", () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

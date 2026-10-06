import { test } from "node:test";
import assert from "node:assert/strict";
import { formatPrijs } from "./prijzen.ts";

test("toont hele bedragen zonder centen", () => {
  assert.equal(formatPrijs(69), "€69");
});

test("toont centen met een komma", () => {
  assert.equal(formatPrijs(27.5), "€27,50");
});

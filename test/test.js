var add = require("../src/add");

QUnit.module("TDD_ADD");

QUnit.test("add", function (assert) {
  assert.equal(add(""), 0);
  assert.equal(add("5"), 5);
  assert.equal(add("2,3"), 5);
  assert.equal(add("4,5,3,9"), 21);
  assert.throws(() => add("1,-3,4"), /-3/);
  assert.throws(() => add("-1,-3,-4"), /-1,-3,-4/);
  assert.equal(add("1\n2\n3"), 6);
  assert.equal(add("//;\n1;2"), 3);
});

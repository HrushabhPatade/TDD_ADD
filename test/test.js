var add = require('../src/add');

QUnit.module('calculator');

QUnit.test('add', function(assert){
    assert.equal(add(2,3), 5);
})
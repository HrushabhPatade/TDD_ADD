var add = require('../src/add');

QUnit.module('calculator');

QUnit.test('add', function(assert){
    assert.equal(add(3,3), 6);
})
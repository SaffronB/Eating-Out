var assert = require("assert");
var nelisa = require ("../nelisa.js")

describe("For the first round of data processing,", function() {

  it('I should create an array with only product names and quanities sold', function() {

    var result = nelisa.originalArray(contents);
    assert.deepEqual(result, ['chakalala 1. ']);
    //index notation of document.

  });



});

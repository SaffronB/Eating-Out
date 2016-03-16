assert = require("assert");
eatingout = require("../eating-out")


describe("For the Eating-Out project, ", function() {

  it('I should create an array that contains the number of each menu item that was consumed', function() {
    var result = eatingout.numbersArray("Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's");

    assert.deepEqual(result, [8, 17, 11]);
  });

  it('I should create an array that contains the price of each menu item', function() {
    var result = eatingout.priceArray("Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9");

    assert.deepEqual(result, [37, 12, 9]);
  });

  it('I should multiply the prices of the menu items by the numbers of menu items that were consumed', function() {
    var result = eatingout.calculateArray([8, 17, 11], [37, 12, 9]);

    assert.deepEqual(result, [599]);
  });
});

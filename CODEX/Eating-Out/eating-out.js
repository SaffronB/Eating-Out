exports.numbersArray = function(firstText) {

  var nArray = firstText.match(/\d+/g);
  return nArray;
};

exports.priceArray = function(secondText) {
  var pArray = secondText.match(/\d+/g);
  return pArray;
};

exports.calculateArray = function(nArray, pArray) {
  var eftArray = [];

  for (var i = 0; i < nArray.length; i++) {
    var burgers1 = nArray[0];
    var beers1 = nArray[1];
    var fantas1 = nArray[2]
  }
  for (var i = 0; i < pArray.length; i++) {
    var burgers2 = pArray[0];
    var beers2 = pArray[1];
    var fantas2 = pArray[2];
  }

  var burgers = burgers1 * burgers2;
  var beers = beers1 * beers2;
  var fantas = fantas1 * fantas2;

  eftArray.push(burgers + beers + fantas)

  return eftArray;

}

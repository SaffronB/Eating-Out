exports.numbersArray = function(firstText){

var nArray = firstText.match(/\d+/g);
return nArray;
};

exports.priceArray = function(secondText) {
var pArray = secondText.match(/\d+/g);
return pArray;
};

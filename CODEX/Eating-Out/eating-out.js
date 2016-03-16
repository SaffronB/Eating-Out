exports.numbersArray = function(firstText){
var firstText = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's"
var nArray = firstText.match(/\d+/g);
return nArray;
};

var fs = require("fs");

//Read file (products.cv)

var contents = fs.readFileSync('./files/week1.csv', 'utf8');



exports.originalArray = function(contents) {
  var csvArray = contents.split(", ");
  return csvArray;
};

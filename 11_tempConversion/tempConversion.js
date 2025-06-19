const convertToCelsius = function(fah) {
  let cel = (fah - 32) / 1.8
  return Math.round(cel * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  let fah = (cel * 1.8) + 32
  return Math.round(fah * 10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//function 1
const sum = function (a, b) {
    return a + b;
  };
  
  //function 2
  const average = function (a, b) {
    return (a + b) / 2;
  };
  
  //function 3
  const findFactorial = function (num) {
    let n = 1;
    while (num > 0) {
      n = n * num;
      --num;
    }
    return n;
  };
  
  //function 4
  const round = function (number) {
    return Math.round(number);
  };
  
  //function 5
  const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent);
  };
  
  //function 6
  const randomNumber = function () {
    return Math.random();
  };
  
  //function 7
  const oneOrZero = function () {
    return Math.floor(Math.random() * 2);
  };
  
  //function 8
  const randomRange = function (number) {
    return Math.round(Math.random() * number);
  };
  
  //function 9
  const includeOf = function (string, character) {
    return string.includes(character);
  };
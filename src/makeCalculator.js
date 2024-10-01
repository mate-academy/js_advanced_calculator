'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
  const a = x;
  const result = 0;

  makeCalculator.add = (b) => {
    return result + b;
  };

  makeCalculator.subtract = (b) => {
    return result - b;
  };

  makeCalculator.divide = (b) => {
    return result / b;
  };

  makeCalculator.multiply = (b) => {
    return result * b;
  };

  makeCalculator.reset = () => {
    return 0;
  };

  // makeCalculator.operate = (res) => {
  //   return console.log(res);
  // };

  return operation(a);

  // function reset() {
  //   return (result = 0);
  // }

  // function add(x) {
  //   let b = 0;

  //   b += x;

  //   return b;
  // }

  // function subtract(x) {
  //   let b = 0;

  //   b -= x;

  //   return b;
  // }

  // function multiply(x) {
  //   let b = 0;

  //   b *= x;

  //   return b;
  // }

  // function divide(x) {
  //   let b = 0;

  //   b /= x;

  //   return b;
  // }
}

module.exports = makeCalculator;

'use strict';

function makeCalculator() {
  // Object that stores the calculator's result and methods
  const calculator = {
    // Initial result is 0
    result: 0,

    // Addition operation
    add: (num) => calculator.result + num,

    // Subtraction operation
    subtract: (num) => calculator.result - num,

    // Multiplication operation
    multiply: (num) => calculator.result * num,

    // Division operation
    divide: (num) => calculator.result / num,

    // Resets the result to 0 and supports chaining
    reset() {
      calculator.result = 0;

      return this;
    },

    // Operates using a passed callback (operation) and a number
    operate(callback, num) {
      calculator.result = callback(num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

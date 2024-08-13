'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      calculator.result += num;
    },
    subtract(num) {
      calculator.result -= num;
    },
    multiply(num) {
      calculator.result *= num;
    },
    divide(num) {
      if (num === 0) {
        throw new Error('Division by zero is not allowed');
      }
      calculator.result /= num;
    },

    reset() {
      calculator.result = 0;

      return calculator; // Allow chaining
    },

    operate(callback, num) {
      callback(num);

      return calculator; // Allow chaining
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(callback, num) {
      callback(num);

      return this;
    },

    add(num) {
      calculator.result += num;

      return this;
    },

    subtract(num) {
      calculator.result -= num;

      return this;
    },

    divide(num) {
      calculator.result /= num;

      return this;
    },

    multiply(num) {
      calculator.result *= num;

      return this;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

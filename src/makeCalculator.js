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

      return calculator;
    },

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
      calculator.result /= num;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    'result': 0,

    add(num) {
      calculator.result += num;

      return calculator;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator;
    },

    divide(num) {
      calculator.result /= num;

      return calculator;
    },

    multiply(num) {
      calculator.result *= num;

      return calculator;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      return callback(num);
    },
  };

  return calculator;
}

module.exports = makeCalculator;

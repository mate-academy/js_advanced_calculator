'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {

    result: 0,

    add(number) {
      this.result += number;

      return calculator;
    },

    reset() {
      this.result = 0;

      return calculator;
    },

    subtract(number) {
      this.result -= number;

      return calculator;
    },

    multiply(number) {
      this.result *= number;

      return calculator;
    },

    divide(number) {
      this.result /= number;

      return calculator;
    },

    operate(callback, number) {
      callback.call(this, number);

      return calculator;
    },
  };

  return calculator;
};

module.exports = makeCalculator;

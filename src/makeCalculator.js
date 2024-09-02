'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const calculator = {
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    divide(number) {
      this.result /= number;
    },

    multiply(number) {
      this.result *= number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

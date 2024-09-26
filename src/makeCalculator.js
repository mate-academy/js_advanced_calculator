'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

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

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

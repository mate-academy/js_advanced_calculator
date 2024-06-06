'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      if (number !== 0) {
        this.result /= number;
      } else {
        this.result = NaN;
      }
    },
  };
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
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
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    result: 0,
  };
}

module.exports = makeCalculator;

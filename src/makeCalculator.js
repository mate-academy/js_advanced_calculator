'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      if (this.result !== 0) {
        this.result /= number;
      }
    },

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;

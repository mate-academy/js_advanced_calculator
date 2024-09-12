'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number) {
      this.result += number;

      return this.result;
    },

    subtract(number) {
      this.result -= number;

      return this.result;
    },

    multiply(number) {
      this.result *= number;

      return this.result;
    },

    divide(number) {
      this.result /= number;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      const call = callback.bind(this);

      call(number);

      return this;
    },
  };
}

module.exports = makeCalculator;

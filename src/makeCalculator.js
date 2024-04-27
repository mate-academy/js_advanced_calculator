'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add(number) {
      return this.result + number;
    },

    subtract(number) {
      return this.result - number;
    },

    multiply(number) {
      return this.result * number;
    },

    divide(number) {
      return this.result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },

    result: 0,
  };
}

module.exports = makeCalculator;

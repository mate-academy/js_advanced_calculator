'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const INITIAL_VALUE = 0;

  return {
    result: INITIAL_VALUE,

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

    operate(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },

    reset() {
      this.result = INITIAL_VALUE;

      return this;
    },
  };
}

module.exports = makeCalculator;

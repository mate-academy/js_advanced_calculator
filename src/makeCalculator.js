'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      if (number === 0) {
        return Infinity;
      }

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
  };
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(initialNumber, number) {
      return initialNumber + number;
    },

    subtract(initialNumber, number) {
      return initialNumber - number;
    },

    multiply(initialNumber, number) {
      return initialNumber * number;
    },

    divide(initialNumber, number) {
      return initialNumber / number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

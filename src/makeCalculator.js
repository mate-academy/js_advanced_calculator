'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(prevNumber, number) {
      return prevNumber + number;
    },

    subtract(prevNumber, number) {
      return prevNumber - number;
    },

    multiply(prevNumber, number) {
      return prevNumber * number;
    },

    divide(prevNumber, number) {
      return prevNumber / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;

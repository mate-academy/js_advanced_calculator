'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    add(rside, lside) {
      return rside + lside;
    },

    subtract(rside, lside) {
      return rside - lside;
    },

    multiply(rside, lside) {
      return rside * lside;
    },

    divide(rside, lside) {
      return rside / lside;
    },
  };
}

module.exports = makeCalculator;

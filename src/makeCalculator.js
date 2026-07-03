'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(result, num) {
      return result + num;
    },

    subtract(result, num) {
      return result - num;
    },

    multiply(result, num) {
      return result * num;
    },

    divide(result, num) {
      return result / num;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

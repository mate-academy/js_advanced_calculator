'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(result, value) {
      return result + value;
    },
    subtract(result, value) {
      return result - value;
    },
    multiply(result, value) {
      return result * value;
    },
    divide(result, value) {
      return result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

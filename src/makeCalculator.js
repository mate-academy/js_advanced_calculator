'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(result, x) {
      return result + x;
    },
    subtract(result, x) {
      return result - x;
    },
    multiply(result, x) {
      return result * x;
    },
    divide(result, x) {
      if (x > 0) {
        return result / x;
      }
    },
    operate(callback, x) {
      this.result = callback(this.result, x);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;

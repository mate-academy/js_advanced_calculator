'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      this.result = callback(this.result, operand);

      return this;
    },

    add(sum, a) {
      let result = sum;

      result += a;

      return result;
    },

    subtract(sum, a) {
      let result = sum;

      result -= a;

      return result;
    },

    multiply(sum, a) {
      let result = sum;

      result *= a;

      return result;
    },

    divide(sum, a) {
      let result = sum;

      result /= a;

      return result;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

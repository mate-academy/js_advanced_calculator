'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      this.result = callback(operand, this.result);

      return this;
    },

    add(a, sum) {
      let result = sum;

      result += a;

      return result;
    },

    subtract(a, sum) {
      let result = sum;

      result -= a;

      return result;
    },

    multiply(a, sum) {
      let result = sum;

      result *= a;

      return result;
    },

    divide(a, sum) {
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

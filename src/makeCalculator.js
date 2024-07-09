'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      callback.call(this, operand);

      return this;
    },

    add(a) {
      this.result += a;
    },

    subtract(a) {
      this.result -= a;
    },

    multiply(a) {
      this.result *= a;
    },

    divide(a) {
      this.result /= a;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

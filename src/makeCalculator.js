'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(operation, n) {
      operation.call(this, n);

      return this;
    },

    reset() {
      this.result = 0;

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
      if (a === 0) {
        return new Error('Not allowed');
      }

      this.result /= a;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

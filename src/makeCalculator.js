'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,

    add(n) {
      this.result += n;

      return this;
    },

    subtract(n) {
      this.result -= n;

      return this;
    },

    multiply(n) {
      this.result *= n;

      return this;
    },

    divide(n) {
      if (n === 0) {
        throw new Error('Division by zero');
      }
      this.result /= n;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, n) {
      operation.call(this, n);

      return this;
    },
  };
}

module.exports = makeCalculator;

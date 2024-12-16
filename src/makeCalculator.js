'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      this.result += x;

      return this;
    },

    subtract(x) {
      this.result -= x;

      return this;
    },

    multiply(x) {
      this.result *= x;

      return this;
    },

    divide(x) {
      if (x === 0) {
        throw new Error('Cannot divide by zero');
      }
      this.result /= x;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      if (typeof operation === 'function') {
        operation.call(this, number);
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

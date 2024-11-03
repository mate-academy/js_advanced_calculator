'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      this.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

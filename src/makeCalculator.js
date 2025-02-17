'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

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
      if (value !== 0) {
        this.result /= value;
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;

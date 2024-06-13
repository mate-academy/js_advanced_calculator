'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const startValue = 0;

  const calculator = {
    result: startValue,

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

    reset() {
      this.result = startValue;

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

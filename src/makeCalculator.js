'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value = 0) {
      this.result += value;

      return this;
    },

    subtract(value = 0) {
      this.result -= value;

      return this;
    },

    multiply(value = 1) {
      this.result *= value;

      return this;
    },

    divide(value = 1) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      return operation.bind(this)(value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;

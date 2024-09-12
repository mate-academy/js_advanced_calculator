'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const defaultResult = 0;

  const calculator = {
    result: defaultResult,

    operate(operation, value) {
      operation.call(this, value);

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
      this.result /= value;
    },

    reset() {
      this.result = defaultResult;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
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

    divide(value) {
      this.result /= value;
    },

    multiply(value) {
      this.result *= value;
    },

    reset(calue) {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}
module.exports = makeCalculator;

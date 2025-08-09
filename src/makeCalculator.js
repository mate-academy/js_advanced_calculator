'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    add(current, value) {
      return current + value;
    },

    subtract(current, value) {
      return current - value;
    },

    multiply(current, value) {
      return current * value;
    },

    divide(current, value) {
      return current / value;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

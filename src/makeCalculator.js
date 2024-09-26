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

    add(currentValue, value) {
      return currentValue + value;
    },

    subtract(currentValue, value) {
      return currentValue - value;
    },

    divide(currentValue, value) {
      return currentValue / value;
    },

    multiply(currentValue, value) {
      return currentValue * value;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

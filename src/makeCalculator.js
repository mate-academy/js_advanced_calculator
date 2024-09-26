'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
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
      if (value === 0) {
        return;
      }

      this.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      if (this.isCorrectNumber(value)) {
        operation.call(this, value);
      }

      return this;
    },

    isCorrectNumber(value) {
      return typeof value === 'number' && isFinite(value);
    },
  };
}

module.exports = makeCalculator;

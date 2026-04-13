'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },

    add(current, number) {
      return current + number;
    },

    subtract(current, number) {
      return current - number;
    },

    multiply(current, number) {
      return current * number;
    },

    divide(current, number) {
      return current / number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

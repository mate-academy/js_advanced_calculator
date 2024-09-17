'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(n) {
      this.result += n;
    },

    subtract(n) {
      this.result -= n;
    },

    multiply(n) {
      this.result *= n;
    },

    divide(n) {
      this.result /= n;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;

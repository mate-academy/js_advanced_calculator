'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, arg) {
      if (typeof operation !== 'function') {
        throw new Error("This isn't function!");
      }

      operation.call(this, arg);

      return this;
    },

    add(arg) {
      this.result += arg;
    },

    subtract(arg) {
      this.result -= arg;
    },

    divide(arg) {
      this.result /= arg;
    },

    multiply(arg) {
      this.result *= arg;
    },
  };
}

module.exports = makeCalculator;

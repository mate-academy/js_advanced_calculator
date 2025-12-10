'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(arg) {
      this.result += arg;
    },

    subtract(arg) {
      this.result -= arg;
    },

    multiply(arg) {
      this.result *= arg;
    },

    divide(arg) {
      if (!arg || isNaN(arg)) {
        this.reset();
        throw new Error('Cannot divide by zero');
      }

      this.result /= arg;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, arg) {
      operation.call(this, arg);

      return this;
    },
  };
}

module.exports = makeCalculator;

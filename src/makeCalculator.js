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

    operate(callback, arg) {
      if (typeof arg !== 'number') {
        throw new Error('Number was expected');
      } else {
        callback.call(this, arg);
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    subtract(arg) {
      this.result -= arg;
    },

    multiply(arg) {
      this.result *= arg;
    },

    divide(arg) {
      if (arg !== 0) {
        this.result /= arg;
      } else {
        throw new Error('Division by zero is not allowed');
      }
    },

  };
}

module.exports = makeCalculator;

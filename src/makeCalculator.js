'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(arg) {
      this.result += arg;

      return this;
    },

    subtract(arg) {
      this.result -= arg;

      return this;
    },

    multiply(arg) {
      this.result *= arg;

      return this;
    },

    divide(arg) {
      this.result /= arg;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, arg) {
      callback.call(this, arg);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

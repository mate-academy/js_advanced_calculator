'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    divide(value) {
      this.result /= value;
    },

    multiply(value) {
      this.result *= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    result: 0,

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

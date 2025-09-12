'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;

      return this.result;
    },
    subtract(value) {
      this.result -= value;

      return this.result;
    },
    multiply(value) {
      this.result *= value;

      return this.result;
    },
    divide(value) {
      this.result /= value;

      return this.result;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this; // permite encadeamento
    },

    reset() {
      this.result = 0;

      return this; // permite encadeamento
    },
  };

  return calculator;
}

module.exports = makeCalculator;

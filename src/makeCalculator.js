'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      return this.result + x;
    },

    subtract(x) {
      return this.result - x;
    },

    multiply(x) {
      return this.result * x;
    },

    divide(x) {
      if (x === 0) {
        throw new Error('Division by zero is not allowed.');
      }

      return this.result / x;
    },

    operate(callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

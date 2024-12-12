'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      this.result += x; // Updates the result property
    },

    subtract(x) {
      this.result -= x; // Updates the result property
    },

    multiply(x) {
      this.result *= x; // Updates the result property
    },

    divide(x) {
      if (x === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      this.result /= x; // Updates the result property
    },

    operate(callback, value) {
      callback.call(this, value);

      return this; // Enables chaining
    },

    reset() {
      this.result = 0; // Resets the result to 0

      return this; // Enables chaining
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this; // Return the calculator object for chaining
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator; // Return the calculator object
}

module.exports = makeCalculator;

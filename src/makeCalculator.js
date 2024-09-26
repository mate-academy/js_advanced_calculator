'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
    result: 0,

    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };
}

module.exports = makeCalculator;

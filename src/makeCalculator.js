'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a = 0, b = 0) => a + b,
    subtract: (a = 0, b = 0) => a - b,
    multiply: (a = 0, b = 0) => a * b,
    divide: (a = 0, b = 1) => a / b,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;

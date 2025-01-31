'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : NaN),

    operate(callback, number) {
      this.result = callback(this.result, number);
      return this;
    },

    reset() {
      this.result = 0;
      return this;
    }
  };
}

module.exports = makeCalculator;

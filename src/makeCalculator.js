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
    divide: (a, b) => a / b,

    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, x) {
      this.result = callback(this.result, x);

      return this;
    },
  };
}

module.exports = makeCalculator;

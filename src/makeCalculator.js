'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => a / b,
  };

  return calculator;
}

module.exports = makeCalculator;

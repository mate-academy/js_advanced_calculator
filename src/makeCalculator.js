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

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, value) {
      this.result = action(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

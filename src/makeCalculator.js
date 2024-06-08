'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: (a, b) => {
      return a + b;
    },

    subtract: (a, b) => {
      return a - b;
    },

    multiply: (a, b) => {
      return a * b;
    },

    divide: (a, b) => {
      return a / b;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, digit) {
      this.result = method(this.result, digit);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

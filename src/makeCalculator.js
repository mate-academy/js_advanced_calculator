'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a, b) => {
      return a + b;
    },

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => {
      if (b === 0) {
        return a;
      }

      return a / b;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, value) {
      this.result = method(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

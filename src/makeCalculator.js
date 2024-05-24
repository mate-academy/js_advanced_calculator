'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(call, value) {
      this.result = call(this.result, value);

      return this;
    },

    add(x, y) {
      return x + y;
    },

    subtract(x, y) {
      return x - y;
    },

    multiply(x, y) {
      return x * y;
    },

    divide(x, y) {
      if (y !== 0) {
        return x / y;
      }

      throw new Error('Cannot divide by 0');
    },

    reset() {
      this.result = 0;

      return this;
    },

    getResult() {
      return this.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

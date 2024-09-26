'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, x) {
      callback.call(this, x);

      return this;
    },

    subtract(x) {
      this.result -= x;
    },

    add(x) {
      this.result += x;
    },

    multiply(x) {
      this.result *= x;
    },

    divide(x) {
      if (x === 0) {
        this.result = "can't divide by zero";
      }

      this.result /= x;
    },

    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

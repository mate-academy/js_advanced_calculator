'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      this.result += x;
      return this;
    },

    subtract(x) {
      this.result -= x;
      return this;
    },

    multiply(x) {
      this.result *= x;
      return this;
    },

    divide(x) {
      this.result /= x;
      return this;
    },

    operate(fn, x) {
      fn.call(this, x);
      return this;
    },

    reset() {
      this.result = 0;
      return this;
    }
  };

  return calculator;
}

module.exports = makeCalculator;

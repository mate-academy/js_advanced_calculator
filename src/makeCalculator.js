'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      this.result += x;

      return this.result;
    },

    subtract(x) {
      this.result -= x;

      return this.result;
    },

    multiply(x) {
      this.result *= x;

      return this.result;
    },

    divide(x) {
      if (x !== 0) {
        this.result /= x;
      }

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, number) {
      this.result = method.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

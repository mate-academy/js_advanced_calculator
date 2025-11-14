'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(b) {
      this.result -= b;

      return this;
    },

    multiply(c) {
      this.result *= c;

      return this;
    },

    divide(d) {
      this.result /= d;

      return this;
    },

    reset(n) {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

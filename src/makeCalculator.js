'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callBack, n) {
      callBack.call(this, n);

      return this;
    },

    add(n) {
      this.result += n;

      return this;
    },

    subtract(n) {
      this.result -= n;

      return this;
    },

    multiply(n) {
      this.result *= n;

      return this;
    },

    divide(n) {
      this.result /= n;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

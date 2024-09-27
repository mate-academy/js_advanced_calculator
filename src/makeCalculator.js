'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, n, pastN = this.result) {
      this.result = callback(n, pastN);

      return this;
    },

    add(n, pastN) {
      return pastN + n;
    },

    subtract(n, pastN) {
      return pastN - n;
    },

    multiply(n, pastN) {
      return pastN * n;
    },

    divide(n, pastN) {
      if (n !== 0) {
        return pastN / n;
      } else {
        return 0;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, n) {
      if (typeof callback === 'function') {
        this.result = callback(this.result, n);
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(n1, n2) {
      return n1 + n2;
    },

    subtract(n1, n2) {
      return n1 - n2;
    },

    multiply(n1, n2) {
      return n1 * n2;
    },

    divide(n1, n2) {
      return n1 / n2;
    }
  };

  return calculator;
}

module.exports = makeCalculator;

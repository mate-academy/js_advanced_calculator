'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      if (callback(this.result, num)) {
        this.result = callback(this.result, num);
      }

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      if (b !== 0) {
        return a / b;
      }
    },
  };

  return calc;
};

module.exports = makeCalculator;

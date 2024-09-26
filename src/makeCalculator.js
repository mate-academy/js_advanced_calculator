'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resObj = {
    result: 0,

    reset() {
      this.result = 0;

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
      if (b === 0) {
        return undefined;
      }

      return a / b;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return resObj;
}

module.exports = makeCalculator;

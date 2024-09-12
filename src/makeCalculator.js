'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const obj = {
    result: 0,

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
      return x / y;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;

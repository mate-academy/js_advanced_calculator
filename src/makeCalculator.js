'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

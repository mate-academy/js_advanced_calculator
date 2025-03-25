'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    operate(callback, number) {
      if (typeof callback === 'function') {
        this.result = callback(this.result, number);
      } else {
        throw new Error('Invalid operation');
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

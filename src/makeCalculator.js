'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (num) => (x) => x + num,
    subtract: (num) => (x) => x - num,
    multiply: (num) => (x) => x * num,
    divide: (num) => (x) => x / num,

    operate(callback, num) {
      this.result = callback(num)(this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

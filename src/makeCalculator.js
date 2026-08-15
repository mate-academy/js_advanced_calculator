'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (num, x) => num + x,
    subtract: (num, x) => num - x,
    multiply: (num, x) => num * x,
    divide: (num, x) => num / x,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

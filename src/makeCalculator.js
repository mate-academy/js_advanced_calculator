'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a) => (b) => b + a,
    subtract: (a) => (b) => b - a,
    multiply: (a) => (b) => b * a,
    divide: (a) => (b) => b / a,

    operate(callback, number) {
      this.result = callback(number)(this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },
    operate(callback, number) {
      result = callback(number);

      return this;
    },

    add: (x) => result + x,
    subtract: (x) => result - x,
    multiply: (x) => result * x,
    divide: (x) => result / x,
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

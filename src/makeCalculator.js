'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a) {
      return function (currentResult) {
        return currentResult + a;
      };
    },

    subtract(a) {
      return function (currentResult) {
        return currentResult - a;
      };
    },

    multiply(a) {
      return function (currentResult) {
        return currentResult * a;
      };
    },

    divide(a) {
      return function (currentResult) {
        return currentResult / a;
      };
    },

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

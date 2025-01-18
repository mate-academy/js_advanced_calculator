'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      return (currentResult) => currentResult + value;
    },

    subtract(value) {
      return (currentResult) => currentResult - value;
    },

    multiply(value) {
      return (currentResult) => currentResult * value;
    },

    divide(value) {
      return (currentResult) => currentResult / value;
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

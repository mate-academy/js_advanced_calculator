'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate (callback, value) {
      this.result = callback(value, this.result);
      return this;
    },

    add (value, currentResult) {
      return currentResult + value;
    },

    subtract (value, currentResult) {
      return currentResult - value;
    },

    multiply (value, currentResult) {
      return currentResult * value;
    },

    divide (value, currentResult) {
      if (value === 0) {
        return currentResult / 1;
      } else {
        return currentResult / value;
      }
    },

    reset () {
      this.result = 0;
      return this;
    },
  }
}

module.exports = makeCalculator;


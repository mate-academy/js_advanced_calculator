'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    add(recentValue, newValue) {
      return recentValue + newValue;
    },

    subtract(recentValue, newValue) {
      return recentValue - newValue;
    },

    multiply(recentValue, newValue) {
      return recentValue * newValue;
    },

    divide(recentValue, newValue) {
      return recentValue / newValue;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(baseNum, number) {
      return baseNum + number;
    },

    subtract(baseNum, number) {
      return baseNum - number;
    },

    multiply(baseNum, number) {
      return baseNum * number;
    },

    divide(baseNum, number) {
      return baseNum / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;

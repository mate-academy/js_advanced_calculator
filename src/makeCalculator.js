'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(func, num) {
      this.result = func(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(res, num) {
      return res + num;
    },

    subtract(res, num) {
      return res - num;
    },

    divide(res, num) {
      if (num !== 0) {
        return res / num;
      }

      return this.result;
    },

    multiply(res, num) {
      return res * num;
    },
  };
}

module.exports = makeCalculator;

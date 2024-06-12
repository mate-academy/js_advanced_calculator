"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(res, num) {
      const result = res + num;

      return result;
    },

    subtract(res, num) {
      const result = res - num;

      return result;
    },

    multiply(res, num) {
      const result = res * num;

      return result;
    },

    divide(res, num) {
      const result = res / num;

      return result;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(func, num) {
      this.result = func(this.result, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

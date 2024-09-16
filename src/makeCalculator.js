'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num, result) {
      return result + num;
    },

    subtract(num, result) {
      return result - num;
    },

    multiply(num, result) {
      return result * num;
    },

    divide(num, result) {
      return result / num;
    },

    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },
  };

  return calculator;
};

module.exports = makeCalculator;

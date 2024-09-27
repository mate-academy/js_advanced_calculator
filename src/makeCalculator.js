'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num, res) {
      return res + num;
    },

    subtract(num, res) {
      return res - num;
    },

    multiply(num, res) {
      return res * num;
    },

    divide(num, res) {
      return res / num;
    },

    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;

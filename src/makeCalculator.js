/* eslint-disable prettier/prettier */
'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a) {
      return calculator.result + a;
    },

    subtract(a) {
      return calculator.result - a;
    },

    multiply(a) {
      return calculator.result * a;
    },

    divide(a) {
      return calculator.result / a;
    },

    operate(callback, a) {
      this.result = callback(a);

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

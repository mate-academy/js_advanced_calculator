'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      return calculator.result + num;
    },

    subtract(num) {
      return calculator.result - num;
    },

    multiply(num) {
      return calculator.result * num;
    },

    divide(num) {
      return calculator.result / num;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, num) {
      calculator.result = callback(num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

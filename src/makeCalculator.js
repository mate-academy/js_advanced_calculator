'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {

    result: 0,

    add(number) {
      calculator.result += number;
    },

    subtract(number) {
      calculator.result -= number;
    },

    multiply(number) {
      calculator.result *= number;
    },

    divide(number) {
      calculator.result /= number;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, number) {
      callback(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */

const calculator = makeCalculator();

function makeCalculator() {
  return {
    result: 0,

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    divide(value) {
      calculator.result /= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(action, value) {
      action(value);

      return calculator;
    },
  };
}

module.exports = makeCalculator;

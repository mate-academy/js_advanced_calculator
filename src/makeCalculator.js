'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      calculator.result /= value;
    },

    reset(value) {
      calculator.result = 0;

      return this;
    },

    operate(callack, value) {
      callack(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

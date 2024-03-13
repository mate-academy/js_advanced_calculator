'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(value, number) {
      value(number);

      return this;
    },

    add(figure) {
      calculator.result += figure;
    },

    subtract(figure) {
      calculator.result -= figure;
    },

    multiply(figure) {
      calculator.result *= figure;
    },

    divide(figure) {
      if (figure === 0) {
        return 'Error';
      };

      calculator.result /= figure;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

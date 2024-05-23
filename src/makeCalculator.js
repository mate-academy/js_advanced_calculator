'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(num) {
      calculator.result += num;

      return calculator;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator;
    },

    multiply(num) {
      calculator.result *= num;

      return calculator;
    },

    divide(num) {
      if (num !== 0) {
        calculator.result /= num;
      }

      return calculator;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(func, num) {
      return func(num);
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(numb) {
      calculator.result += numb;

      return calculator.result;
    },

    subtract(numb) {
      calculator.result -= numb;

      return calculator.result;
    },

    multiply(numb) {
      calculator.result *= numb;

      return calculator.result;
    },

    divide(numb) {
      calculator.result /= numb;

      return calculator.result;
    },

    reset: () => {
      calculator.result = 0;

      return calculator;
    },

    operate: (callback, number) => {
      calculator.result = callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

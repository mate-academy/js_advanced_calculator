'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callBack, number) {
      calculator.result = callBack(number);

      return calculator;
    },

    add(number) {
      return calculator.result + number;
    },

    subtract(number) {
      return calculator.result - number;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('This value is not valid');
      }
      return calculator.result / number;
    },

    multiply(number) {
      return calculator.result * number;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

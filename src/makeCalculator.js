'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: (callback, number) => {
      calculator.result = callback(calculator.result, number);

      return calculator;
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    add: (number) => calculator.operate((a, b) => a + b, number),
    subtract: (number) => calculator.operate((a, b) => a - b, number),
    multiply: (number) => calculator.operate((a, b) => a * b, number),
    divide: (number) => calculator.operate((a, b) => a / b, number),
  };

  return calculator;
}

module.exports = makeCalculator;

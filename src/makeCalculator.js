'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    operate: (callback, number) => {
      callback(number);

      return calculator;
    },
    add: (number) => {
      calculator.result += number;
    },
    subtract: (number) => {
      calculator.result -= number;
    },
    multiply: (number) => {
      calculator.result *= number;
    },
    divide: (number) => {
      if (number < 0 || number > 0) {
        calculator.result /= number;
      }
    },
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

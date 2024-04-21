'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, value) {
      calculator.result = operation(value);

      return calculator;
    },

    add: (value) => calculator.result + value,
    subtract: (value) => calculator.result - value,
    multiply: (value) => calculator.result * value,
    divide: (value) => calculator.result / value,

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

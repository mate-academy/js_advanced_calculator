'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, value) {
      this.result = operation(value);

      return this;
    },

    add: (value) => calculator.result + value,
    subtract: (value) => calculator.result - value,
    multiply: (value) => calculator.result * value,
    divide: (value) => {
      if (value !== 0) {
        return calculator.result / value;
      }

      return calculator.result;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (value) => {
      calculator.result += value;

      return calculator.result;
    },
    subtract: (value) => {
      calculator.result -= value;

      return calculator.result;
    },
    multiply: (value) => {
      calculator.result *= value;

      return calculator.result;
    },
    divide: (value) => {
      calculator.result /= value;

      return calculator.result;
    },
    operate(operationFn, value) {
      operationFn(value);

      return calculator;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

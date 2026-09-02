'use strict';

/**
 * @return {object}
 */
const operations = {
  add: (currentValue, operand) => currentValue + operand,
  subtract: (currentValue, operand) => currentValue - operand,
  multiply: (currentValue, operand) => currentValue * operand,
  divide: (currentValue, operand) => currentValue / operand,
};

function makeCalculator() {
  const calculator = {
    result: 0,

    ...operations,

    operate(operation, operand) {
      calculator.result = operation(calculator.result, operand);

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

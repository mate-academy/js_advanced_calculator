'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(operand) {
      calculator.result += operand;

      return calculator;
    },

    subtract(operand) {
      calculator.result -= operand;

      return calculator;
    },

    multiply(operand) {
      calculator.result *= operand;

      return calculator;
    },

    divide(operand) {
      if (operand !== 0) {
        calculator.result /= operand;
      } else {
        return 'Division by zero is not allowed.';
      }

      return calculator;
    },

    reset(operand) {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, operand) {
      return callback(operand);
    },
  };

  return calculator;
}

module.exports = makeCalculator;

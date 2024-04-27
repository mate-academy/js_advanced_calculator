'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, operand) {
      callback(operand);

      return calculator;
    },
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
      calculator.result /= num;

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

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(callback, number) {
      callback(number);

      return calculator;
    },
    add(num) {
      calculator.result += num;
    },
    subtract(num) {
      calculator.result -= num;
    },
    multiply(num) {
      calculator.result *= num;
    },
    divide(num) {
      calculator.result /= num;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

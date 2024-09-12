'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(callback, num) {
      callback(num);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

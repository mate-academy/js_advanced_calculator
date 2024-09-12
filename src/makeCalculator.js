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
      calculator.result = Math.round(calculator.result / num);
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(operation, num) {
      operation(num);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add(number) {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    multiply(number) {
      calculator.result *= number;
    },
    divide(number) {
      calculator.result /= number;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(fn, n) {
      fn(n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      calculator.result += number;

      return this;
    },
    subtract(number) {
      calculator.result -= number;

      return this;
    },
    multiply(number) {
      calculator.result *= number;

      return this;
    },
    divide(number) {
      calculator.result /= number;

      return this;
    },
    operate(operation, number) {
      operation(number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

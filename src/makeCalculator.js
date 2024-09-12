'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      calculator.result += number;

      return calculator.result;
    },
    subtract(number) {
      calculator.result -= number;

      return calculator.result;
    },
    multiply(number) {
      calculator.result *= number;

      return calculator.result;
    },
    divide(number) {
      if (number !== 0) {
        calculator.result /= number;

        return calculator.result;
      }
    },
    operate(callback, number) {
      callback(number);

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

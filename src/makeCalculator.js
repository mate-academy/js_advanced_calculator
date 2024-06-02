'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(number, this);

      return this;
    },
    add(number, calculator) {
      calculator.result += number;
    },
    subtract(number, calculator) {
      calculator.result -= number;
    },
    multiply(number, calculator) {
      calculator.result *= number;
    },
    divide(number, calculator) {
      calculator.result /= number;
    },
  };
}

module.exports = makeCalculator;

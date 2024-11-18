'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const objCalculator = {
    operate(callback, number) {
      callback(number);

      return this;
    },
    add(number) {
      objCalculator.result += number;
    },
    subtract(number) {
      objCalculator.result -= number;
    },
    multiply(number) {
      objCalculator.result *= number;
    },
    divide(number) {
      objCalculator.result /= number;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return objCalculator;
}

module.exports = makeCalculator;

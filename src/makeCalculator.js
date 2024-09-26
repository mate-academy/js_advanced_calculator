'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const result = {
    add(calculator, number) {
      calculator.result += number;
    },
    subtract(calculator, number) {
      calculator.result -= number;
    },
    multiply(calculator, number) {
      calculator.result *= number;
    },
    devide(calculator, number) {
      calculator.result /= number;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      operation(this, number);

      return this;
    },
    result: 0,
  };

  return result;
}

module.exports = makeCalculator;

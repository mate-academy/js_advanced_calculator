'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      this.result /= num;
    },
    reset() {
      this.result = 0;
      return this;
    },
    operate(operation, num) {
      this.operation = operation;
      this.operation(num)

      return this;
    },
  };
}

module.exports = makeCalculator;

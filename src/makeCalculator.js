'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    add(number) {
      this.result += number;
    },
    subtract(number) {
      this.result -= number;
    },
    multiply(number) {
      this.result *= number;
    },
    divide(number) {
      this.result /= number;
    },
    reset(number) {
      this.result = 0;

      return this;
    },
    operate(operator, number) {
      operator.call(this, number);

      return this;
    },
    result: 0,
  };
}

module.exports = makeCalculator;

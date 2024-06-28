'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  // let result = 0;

  return {
    result: 0,

    add(number) {
      this.result += number;

      return this;
    },
    subtract(number) {
      this.result -= number;

      return this;
    },
    multiply(number) {
      this.result *= number;

      return this;
    },
    divide(number) {
      this.result /= number;

      return this;
    },
    operate(method, number) {
      method.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  }
}

module.exports = makeCalculator;

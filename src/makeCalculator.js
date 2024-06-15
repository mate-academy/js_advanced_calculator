'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(num) {
      this.result -= num;
    },

    divide(num) {
      this.result /= num;
    },

    multiply(num) {
      this.result *= num;
    },

    operate(operation, num) {
      operation.call(this, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

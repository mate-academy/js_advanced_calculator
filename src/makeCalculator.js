'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      this.result += num;
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

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

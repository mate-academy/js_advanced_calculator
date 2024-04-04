'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      this.result += number;

      return this.result;
    },

    subtract(number) {
      this.result -= number;

      return this.result;
    },

    multiply(number) {
      this.result *= number;

      return this.result;
    },

    divide(number) {
      this.result /= number;

      return this.result;
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

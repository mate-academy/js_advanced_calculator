'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, number) {
      if (typeof operation === 'function') {
        operation.call(this, number);
      }

      return this;
    },

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
      if (number === 0) {
        return 'ERROR';
      }

      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

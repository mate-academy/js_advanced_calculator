'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    get result() {
      return result;
    },

    add(number) {
      result += number;

      return this;
    },

    subtract(number) {
      result -= number;

      return this;
    },

    multiply(number) {
      result *= number;

      return this;
    },

    divide(number) {
      result /= number;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, number) {
      operation.bind(this)(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

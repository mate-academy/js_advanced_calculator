'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
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
      if (number !== 0) {
        result /= number;
      } else {
        return 'Cannot divide by zero';
      }

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;

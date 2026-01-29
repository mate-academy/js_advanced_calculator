'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    operate(operation, number) {
      operation(number);

      return this;
    },
    add(number) {
      result += number;

      return result;
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
      if (number === 0) {
        throw new Error('Division by zero');
      }
      result /= number;

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;

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
    operate(operation, value) {
      result = operation(result, value);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }

      return a / b;
    },
  };
}

module.exports = makeCalculator;

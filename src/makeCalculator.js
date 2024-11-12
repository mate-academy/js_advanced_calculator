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
    add(value) {
      result += value;
    },
    subtract(value) {
      result -= value;
    },
    multiply(value) {
      result *= value;
    },
    divide(value) {
      if (value !== 0) {
        result /= value;
      } else {
        throw new Error('Cannot divide by zero');
      }
    },
    operate(operation, value) {
      operation(value);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

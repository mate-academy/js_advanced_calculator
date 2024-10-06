'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
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
        return 'Cannot divide by zero';
      }
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, value) {
      operation(value);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;

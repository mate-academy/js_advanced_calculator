'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(numb) {
      result += numb;
    },

    subtract(numb) {
      result -= numb;
    },

    multiply(numb) {
      result *= numb;
    },

    divide(numb) {
      if (numb === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      result /= numb;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, number) {
      if (typeof operation !== 'function') {
        throw new TypeError('Operation must be a valid function.');
      }
      operation(number);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;

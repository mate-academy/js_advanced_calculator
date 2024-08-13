'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(a) {
      result += a;

      return this;
    },
    subtract(a) {
      result -= a;

      return this;
    },
    multiply(a) {
      result *= a;

      return this;
    },
    divide(a) {
      if (a === 0) {
        throw new Error('Cannot divide by zero');
      }

      result /= a;

      return this;
    },
    operate(operation, number) {
      if (typeof operation === 'function') {
        operation.call(this, number);

        return this;
      }
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

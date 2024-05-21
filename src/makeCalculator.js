'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    result: result,
    add(a) {
      result += a;
    },
    subtract(a) {
      result -= a;
    },
    divide(a) {
      result /= a;
    },
    multiply(a) {
      result *= a;
    },
    operate(operation, a) {
      operation(a);

      this.result = result;

      return this;
    },
    reset() {
      this.result = 0;
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

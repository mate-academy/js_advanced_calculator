'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(x) {
      this.result += x;
    },
    subtract(x) {
      this.result -= x;
    },
    multiply(x) {
      this.result *= x;
    },
    divide(x) {
      if (x === 0) {
        throw new Error('Division by zero is not allowed');
      }

      this.result /= x;
    },
    operate(operation, x) {
      operation.call(this, x);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    operate(operation, n) {
      operation.call(this, n);

      return this;
    },
    add(n) {
      this.result += n;
    },
    subtract(n) {
      this.result -= n;
    },
    multiply(n) {
      this.result *= n;
    },
    divide(n) {
      if (n === 0) {
        this.result = 0;
        throw new Error('Cannot divide by zero');
      }
      this.result /= n;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

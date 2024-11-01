'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(val) {
      this.result += val;
    },
    subtract(val) {
      this.result -= val;
    },
    multiply(val) {
      this.result *= val;
    },
    divide(val) {
      this.result /= val;
    },
    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);

        return this;
      } else {
        throw new Error(`${operation} is not a function`);
      }
    },
  };
}

module.exports = makeCalculator;

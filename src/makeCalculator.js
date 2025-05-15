'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(operation, value) {
      if (typeof operation !== 'function') {
        throw new TypeError('Operation must be a function');
      }
      operation.call(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },

    add(value) {
      this.result += value;

      return this.result;
    },
    subtract(value) {
      this.result -= value;

      return this.result;
    },
    divide(value) {
      this.result /= value;

      return this.result;
    },
    multiply(value) {
      this.result *= value;

      return this.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

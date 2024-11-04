'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      if (value === 0) {
        throw new Error(`Cannot divide, because b = 0`);
      } else {
        this.result /= value;

        return this;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

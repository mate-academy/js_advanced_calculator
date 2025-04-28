'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },

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
        throw new Error(`You can't divide by zero.`);
      }

      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;

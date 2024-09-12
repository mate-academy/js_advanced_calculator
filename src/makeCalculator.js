'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const RESET_DEFAULT_VALUE = 0;

  return {
    result: RESET_DEFAULT_VALUE,

    add(value, result) {
      return result + value;
    },

    subtract(value, result) {
      return result - value;
    },

    multiply(value, result) {
      return result * value;
    },

    divide(value, result) {
      if (value !== 0) {
        return result / value;
      }

      throw new Error('You cannot divide by zero!');
    },

    reset() {
      this.result = RESET_DEFAULT_VALUE;

      return this;
    },

    operate(operation, value) {
      if (typeof value === 'number') {
        this.result = operation(value, this.result);

        return this;
      }

      throw new Error('Value is not a number');
    },
  };
};

module.exports = makeCalculator;

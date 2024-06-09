'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const initialValue = 0;

  const config = {
    result: initialValue,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      this.result /= value;
    },

    reset() {
      this.result = initialValue;

      return this;
    },

    operate(operation, value) {
      operation.bind(this)(value);

      return this;
    },
  };

  return config;
}

module.exports = makeCalculator;

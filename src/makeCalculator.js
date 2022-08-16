'use strict';

/**
 * gi
 *
 *
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const calc = {
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

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },

    result: 0,

    clear() {
      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };

  return calc;
}

module.exports = makeCalculator;

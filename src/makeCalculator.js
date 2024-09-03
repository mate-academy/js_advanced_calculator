'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    divide(a, b) {
      return a / b;
    },

    multiply(a, b) {
      return a * b;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;

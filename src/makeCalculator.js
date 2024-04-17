'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObject = {
    result: 0,
    operate(operator, value) {
      this.result = operator(this.result, value);

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculatorObject;
}

module.exports = makeCalculator;

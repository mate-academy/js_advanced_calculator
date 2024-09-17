'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calc = {
    result: 0,

    addition(a, b) {
      return a + b;
    },

    subtraction(a, b) {
      return a - b;
    },

    division(a, b) {
      return a / b;
    },

    multiplication(a, b) {
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

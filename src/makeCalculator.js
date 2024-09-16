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
      if (b === 0) {
        return 'Division by zero is not allowed';
      }

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

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

    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => a / b,

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculatorObject;
}

module.exports = makeCalculator;

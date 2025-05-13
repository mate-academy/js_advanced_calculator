'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const CALCULATOR = {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      if (typeof operation === 'function') {
        this.result = operation(this.result, number);
      }

      return this;
    },
  };

  return CALCULATOR;
}

module.exports = makeCalculator;

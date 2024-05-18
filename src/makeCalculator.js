'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      if (typeof operation !== 'function'
      || typeof number !== 'number'
      || isNaN(number)
      ) {
        throw new Error('Enter correct arguments');
      }
      this.result = operation(this.result, number);

      return this;
    },
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
  };
}

module.exports = makeCalculator;
